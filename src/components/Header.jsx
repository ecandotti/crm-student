import React from 'react'

const Header = () => {
    const LogOutStyle = {
        marginRight: "5px"
    }
    return (
        <div className="navbar-fixed">
            <nav>
                <div className="nav-wrapper blue">
                    <div className="right">
                        <span>Connecté en tant que <b>Admin</b></span>
                        {/* <button className="btn red" onClick={() => { auth.logout(() => { props.history.push('/') }) }}>Se Déconnecter</button> */}
                        <span className="btn" style={LogOutStyle}>Se deconnecter</span>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header