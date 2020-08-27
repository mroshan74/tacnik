import React, { useState } from 'react'
import Drawer from '@material-ui/core/Drawer'
import burger from '../../resources/assets/menu/menu.png'
import close from '../../resources/assets/menu/close.png'
import { connect } from 'react-redux'
import Register from '../Register-Login/Register'
import Login from '../Register-Login/Login'
import { isSignedIn } from '../../auth/isAuth'
import PopUp from '../PopUps/Popup'

function AppBar(props) {
    const [state, setState] = useState(false)
    const toggleDrawer = () => () => {
        setState(!state)
    }
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
        <div className='app-bar-contain'>
            <nav className='app-bar-nav'>
                <img src={burger} alt='menu' className='burger-menu' onClick={toggleDrawer(true)}/>
                <Drawer anchor={'top'} open={state} onClose={toggleDrawer()} >
                    <div className='appBar-drawer'>
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
                                        toggleDrawer()
                                        handleModalStatus()
                                        setComponent(<Register/>)
                                    }
                                    }>REGISTER</li>
                                }
                            {!isSignedIn() && 
                                <li className='link login' onClick={() => {
                                    toggleDrawer()
                                    handleModalStatus()
                                    setComponent(<Login/>)
                                    }}>LOGIN</li>
                            }
                            {isSignedIn() && 
                                <li className='link login-out' onClick={handleLogOut}>LOG OUT</li>
                            }
                        </ul>
                    </div>
                </Drawer>
                {modalStatus && 
                <PopUp 
                    component={component} 
                    handleModalStatus={handleModalStatus} 
                    modalStatus={modalStatus} 
                />
            }
            </nav>
        </div>
    )
}

export default connect()(AppBar)
