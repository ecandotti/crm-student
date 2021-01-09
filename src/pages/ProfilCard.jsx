import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import { GET_FIND_ID, GET_DELETE_ID } from '../config.json'

import { MdModeEdit } from 'react-icons/md'
import { HiTrash } from 'react-icons/hi'

import { useData } from '../context/data'

const ProfilCard = () => {
    const history = useHistory()
    const { updateData } = useData()

    // Recup ID in URL (string)
    const idURL = window.location.pathname.split('/')[2]

    const [id, setId] = useState()
    const [name, setName] = useState()
    const [firstname, setFirstName] = useState()
    const [mail, setMail] = useState()
    const [profil, setProfil] = useState()
    const [role, setRole] = useState()
    const [isAdmin] = useState(false)
    
    let profilReq = []

    fetch(GET_FIND_ID + idURL)
        .then(response => response.json())
        .then(req => {profilReq.push(req)})
        .then(() => {
            profilReq.forEach(element => {
                setId(element.id)
                setName(element.name)
                setFirstName(element.firstname)
                setMail(element.mail)
                setProfil(element.profil)
                setRole(element.role)
            })
        })
        .catch(err => console.log(err))

    const deleteProfil = () => {
        fetch(GET_DELETE_ID + id )
            .then(window.alert("Etudiant supprimé"))
            .then(updateData())
            .then(history.push('/'))
            .catch(err => console.log(err))
    }

    if(id !== 0) {
        return(
            <div className="container col s12 m12 l12">
                <div className="card horizontal">
                    <div className="card-image center-align valign-wrapper">
                        <img src="https://icons-for-free.com/iconfiles/png/512/human+person+user+icon-1320196276306824343.png" alt=""/>
                    </div>
                    <div className="card-stacked">
                        <div className="card-content">
                            <h4 className="header">{ name } - { firstname }</h4>
                            <p>
                                Admin : {isAdmin ? 'OUI' : 'NON'}<br/>
                                Mail : { mail }<br/> 
                                Profil : { profil }<br />
                                Rôle : { role }<br/>
                                ID : { id }
                            </p>
                        </div>
                        <div className="card-action">
                        <div className="row">
                                <button onClick={deleteProfil} className="btn red waves-effect waves-light col s4 offset-s1"><HiTrash /></button>
                                <button className="btn disabled col offset-s1 s4"><MdModeEdit /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else { 
        return (
            <h4 className="container red warning center white-text">Résultat introuvable 😬</h4>
        )
    }  
}

export default ProfilCard