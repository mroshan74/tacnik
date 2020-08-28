import React, {useState} from 'react'
import PopUp from '../PopUps/Popup'
import Login from '../Register-Login/Login'
import Register from '../Register-Login/Register'
import { isSignedIn } from '../../auth/isAuth'
import ResNav from './ResNav'
import Swal from 'sweetalert2'

function Nav() {
    const [modalStatus,setModalStatus] = useState(false)
    const [component,setComponent] = useState(null)
    const handleModalStatus = () => {
        setModalStatus(!modalStatus)
    }
    const handleCloseModal = () => {
        setModalStatus(false)
    }
    const handleLogOut = () => {
        localStorage.removeItem('authToken')
        Swal.fire({
            icon: 'success',
            title: 'Logged Out'
        })
        setTimeout(() => {
            window.location.href = '/'
        },800)
    }
    const handleDisableClick = (e) => {
        e.preventDefault()
    }
    return (
        <div>
            <ResNav />
            <header className='nav_container' contextMenu='navContest' onContextMenu={handleDisableClick}>
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
                                setComponent(<Register handleModalStatus={handleCloseModal}/>)
                            }
                            }>REGISTER</li>
                        }
                    {!isSignedIn() && 
                        <li className='link login' onClick={() => {
                            handleModalStatus()
                            setComponent(<Login handleModalStatus={handleCloseModal} />)
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
