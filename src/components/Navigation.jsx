import React from 'react'

import { FaUserPlus } from 'react-icons/fa'
import { AiFillHome, AiOutlineReload } from 'react-icons/ai'

import { NavLink } from 'react-router-dom'

import { useAuth } from '../context/auth'
import { useData } from '../context/data'

const Navigation = () => {
    const { authTokens } = useAuth()
    const { allProfils, updateData } = useData()
    
    const ButtonStyle = {
        marginLeft: '5px'
    }
    const HeaderStyle = {
        marginTop: '50px',
        padding: 'none'
    }
    return(
        <>
            {
                authTokens &&
                <div className="container row" style={HeaderStyle}>
                    <div className="col s6">
                        Nombre d'étudiant : { allProfils.length } trouvés.
                    </div>
                    <div className="col s6 right-align">
                        <NavLink to="/addprofil" className="btn green waves-effect waves-light" style={ButtonStyle}>
                            <FaUserPlus />
                        </NavLink>
                        <NavLink to="/" className="btn orange waves-effect waves-light" style={ButtonStyle}>
                            <AiFillHome />
                        </NavLink>
                        <button className="btn blue waves-effect waves-light" style={ButtonStyle} onClick={() => updateData()}>
                            <AiOutlineReload />
                        </button>
                    </div>
                </div>
            }
            
        </>
    )
}

export default Navigation