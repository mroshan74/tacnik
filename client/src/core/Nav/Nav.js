import React, {useState} from 'react'
import PopUp from '../PopUps/Popup'
import Login from '../Register-Login/Login'
import Register from '../Register-Login/Register'
import { isSignedIn } from '../../auth/isAuth'
import ResNav from './ResNav'

function Nav() {
    const [modalStatus,setModalStatus] = useState(false)
    const [component,setComponent] = useState(null)
    const handleModalStatus = () => {
        setModalStatus(!modalStatus)
    }
    const handleLogOut = () => {
        localStorage.removeItem('authToken')
        window.location.href = '/'
    }
    return (
        <div>
            <ResNav />
            <header className='nav_container'>
                <img src={require('../../resources/icons/logo.png')} alt="logo"/>
                <ul className='menu'>
                    <li className='link'>HOME</li>
                    <li className='link'>GALLERIES</li>
                    <li className='link'>THEATRE</li>
                    <li className='link'>DISTRICT MUSEUM</li>
                    <li className='link'>LATEST NEWS</li>
                    <li className='link'>CONTACT</li>
                    {!isSignedIn() &&
                        <li className='link register' onClick={
                            () => {
                                handleModalStatus()
                                setComponent(<Register/>)
                            }
                            }>REGISTER</li>
                        }
                    {!isSignedIn() && 
                        <li className='link login' onClick={() => {
                            handleModalStatus()
                            setComponent(<Login/>)
                            }}>LOGIN</li>
                    }
                    {isSignedIn() && 
                        <li className='link login-out' onClick={handleLogOut}>LOG OUT</li>
                    }
                </ul>
            </header>
            {modalStatus && 
                <PopUp 
                    component={component} 
                    handleModalStatus={handleModalStatus} 
                    modalStatus={modalStatus} 
                />
            }
        </div>
    )
}

export default Nav
