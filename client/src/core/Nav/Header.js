import React from 'react'

function Header() {
    return (
        <div>
            <header className='deptOfMuseum'>
                <div className='deptOfMuseum_container'>
                <div className='deptOfMuseum_left'>
                    <img src={require('../../resources/icons/tamil-nadu-logo.png')} alt="logo"/>
                    <div className="deptOfMuseum_left--content">
                        <h3>Department of Museums</h3>
                        <h4>Egmore, Chennai, Tamil Nadu 600008.</h4>
                    </div>
                </div>
                <div className='deptOfMuseum_right'>
                    <i className="fa fa-phone" aria-hidden="true"></i>
                    <h5>044 2819 3035</h5>
                </div>
                </div>
            </header>
        </div>
    )
}

export default Header
