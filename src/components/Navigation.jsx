import React from 'react'

import { FaUserPlus } from 'react-icons/fa'
import { AiFillHome } from 'react-icons/ai'
import { NavLink } from 'react-router-dom'

const Navigation = (props) => {
    const ButtonStyle = {
        marginLeft: '5px',
        marginRight: '5px'
    }
    const HeaderStyle = {
        marginTop: "50px"
    }
    return(
        <>
            {
                props.isLoggedIn &&
                <div className="container row" style={HeaderStyle}>
                    <div className="col s6">
                        Nombre d'étudiant : { props.nbStudents } trouvés.
                    </div>
                    <div className="col s6 right-align">
                        <NavLink to="/addstudent" className="btn green waves-effect waves-light" style={ButtonStyle}>
                            <FaUserPlus />
                        </NavLink>
                        <NavLink to="/" className="btn orange waves-effect waves-light" style={ButtonStyle}>
                            <AiFillHome />
                        </NavLink>
                    </div>
                </div>
            }
            
        </>
    )
}

export default Navigation