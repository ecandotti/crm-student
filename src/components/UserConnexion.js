import auth from '../auth'

const UserConnexion = (props) => {

    return(
        <>
            <span className="left">Connecté en tant que <b>{props.userInfo.name}</b></span>&#160;&#160;
            <button className="btn red" onClick={ () => {
                        auth.logout(() => {
                            props.history.push('/')
                        })
                    }
                }
            >Se Déconnecter</button>&#160;
        </>
    )
}

export default UserConnexion