const UserConnexion = (props) => {
    
    let showMenu = props.showSubMenu
    let loginhandler = props.loginhandler
    let user = props.user.name
    let lastName = props.user.lastName
    let image = props.user.image.imageProfile

    console.log(image)

    return(
        <div className="center" >
            <p> {user} {lastName} </p>
    
            <p className={showMenu ? 'Buttonlist returnThis' : 'Buttonlist' } onClick={props.handlerNav}>▾</p>
            {showMenu ?
                <ul>
                <li>Mes informations</li> 
                <li><button onClick={loginhandler}>Me déconnecter</button></li> 
            </ul>: 
                ""
            }
        </div>
    )
}

export default UserConnexion