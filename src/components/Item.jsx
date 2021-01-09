import React from 'react'

import { FaAddressCard } from 'react-icons/fa'
import { HiTrash } from 'react-icons/hi'
import { NavLink } from 'react-router-dom'

import { GET_DELETE_ID } from '../config.json'

import { useData } from '../context/data'

const Item = (props) => {

    const { updateData } = useData() 

    const name = props.profil.nom
    const firstname = props.profil.firstname
    const mail = props.profil.mail
    const role = props.profil.role
    const id = props.profil.id

    const deleteProfil = () => {
        fetch(GET_DELETE_ID + id)
            .then(window.alert("Profile supprimé"))
            .then(updateData)
            .catch(err => console.log(err))
    }
    
    const ButtonStyle = {
        margin: '5px'
    }

    return(
        <>
            <tr>
                <td>{ id }</td>
                <td className="center">{ name }</td>
                <td className="center">{ firstname }</td>
                <td className="center">{ mail }</td>
                <td className="center">{ role }</td>
                <td className="right-align">
                    <div className="row">
                        <div onClick={deleteProfil} className="btn red waves-effect waves-light" style={ButtonStyle}><HiTrash /></div>
                        <NavLink to={`/profil/${id}`} className="btn purple waves-effect waves-light" style={ButtonStyle}><FaAddressCard /></NavLink>
                    </div>
                </td>
            </tr>
        </>
    )
}

export default Item