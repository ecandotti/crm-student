import React from 'react'
import 'materialize-css'
import UserConnexion from './UserConnexion'
import { Link } from 'react-router-dom'


const NavBar = (props) => {
    
    let user = { 
        name: "Admin"
    }

    return (
        <div className="navbar-fixed">
            <nav>
                <div className="nav-wrapper blue">
                    <div className="right">
                        <UserConnexion userInfo={user} history={props.history}/>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar