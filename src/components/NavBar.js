import '../css/Menu.css'
import logoSM from  '../img/Logo.svg'
import UserConnexion from './UserConnexion'
import imageProfile from '../img/man.svg'


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
        <div className="navbar">
            <div  className="logo"> 
                <img alt="Logo Student Manaager" src={logoSM}/>
            </div>
            <UserConnexion showSubMenu={showSubMenu} loginhandler={loginhandler} handlerNav={handlerNav} user={user} />
        </div>
    )
}

export default NavBar