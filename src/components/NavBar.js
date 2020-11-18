//import '../css/Menu.css'
import React from 'react'
import 'materialize-css'
import logoSM from  '../img/Logo.svg'
import UserConnexion from './UserConnexion'
import imageProfile from '../img/man.svg'
import { Link } from 'react-router-dom'


const NavBar = (props) => {
    
    let showSubMenu = props.showSubMenu
    let loginhandler = props.handlerlogin
    let handlerNav = props.handlerNav
    let user = { 
        name: "Pierre",
        lastName: "Leffe",
        image: { imageProfile }
    }

    return (
        <div className="navbar-fixed">
            <nav>
                <div className="nav-wrapper blue">
                    <div className="brand-logo left"> 
                        <Link to="/"><img alt="Logo Student Manaager" src={logoSM}/></Link>
                    </div>
                    <ul className="right hide-on-med-and-down">
                        <li><UserConnexion showSubMenu={showSubMenu} loginhandler={loginhandler} handlerNav={handlerNav} user={user} /></li>
                    </ul>
                </div>
            </nav>
        </div>
        
    )
}

export default NavBar