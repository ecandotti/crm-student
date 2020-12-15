import React from 'react'

import { useAuth } from '../context/auth'

const Header = (props) => {
    const title = 'Student Manager' 
    const { setAuthTokens } = useAuth()

    const logOut = () => {
        setAuthTokens()
        props.setLoggedIn(false)
    }

    const LogOutStyle = {
        margin: "10px"
    }
    const TitleStyle = {
        alignItems: "center",
        marginLeft: "10px"
    }
    return (
        <div className="navbar-fixed">
            <nav>
                <div className="nav-wrapper blue">
                    <div>
                        <h5 className="left" style={TitleStyle}>{ title }</h5>
                    </div>
                    {
                        props.isLoggedIn &&
                        <div className="right">
                            <span>Connecté en tant que <b>Admin</b></span>
                            {/* <button className="btn red" onClick={() => { auth.logout(() => { props.history.push('/') }) }}>Se Déconnecter</button> */}
                            <span className="btn" style={LogOutStyle} onClick={logOut}>Se deconnecter</span>
                        </div>
                    }
                    
                </div>
            </nav>
        </div>
    )
}

export default Header