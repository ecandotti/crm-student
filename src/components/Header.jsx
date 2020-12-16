import React from 'react'

import { useAuth } from '../context/auth'

const Header = () => {
    const title = 'Student Manager' 
    const { setAuthTokens } = useAuth()
    const { authTokens } = useAuth()

    const logOut = () => {
        setAuthTokens()
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
                        authTokens &&
                        <div className="right">
                            {/* <span>Connecté en tant que <b>Admin</b></span> */}
                            <span className="btn" style={LogOutStyle} onClick={logOut}>Se deconnecter</span>
                        </div>
                    }
                    
                </div>
            </nav>
        </div>
    )
}

export default Header