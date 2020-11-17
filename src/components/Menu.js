import React from 'react'
import '../css/Menu.css'
import logoSM from  '../img/Logo.svg'
import  InfosConnexion from './UserInfo'
import imageProfile from '../img/man.svg'


export const Nav = (props) => {
    
    let showSubMenu = props.showSubMenu
    let loginhandler = props.handlerlogin
    let handlerNav = props.handlerNav
    let user = { 
        name: "Pierre",
        lastName: "Leffe",
        image: { imageProfile }
    }

    return (
        <div className="navbar">
            <div  className="logo"> 
                <img alt="Logo Student Manaager" src={logoSM}/>
            </div>
            <InfosConnexion showSubMenu={showSubMenu} loginhandler={loginhandler} handlerNav={handlerNav} user={user} />
        </div>
    )
}


