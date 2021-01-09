import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import { useData } from '../context/data'

import { POST_CREATE_ID } from '../config.json'

const AddProfil = () => {

    const history = useHistory()
    const { updateData } = useData()

    const [user, setUser] = useState('')
    const [name, setName] = useState('')
    const [profil] = useState('non')
    const [firstName, setFirstName] = useState('')
    const [mail, setMail] = useState('')
    const [spec, setSpec] = useState('web')
    const [role, setRole] = useState('etudiant')
    const [password, setPassword] = useState('')

    const Submit = async (event) => {
        event.preventDefault()

        const newProfil = { 
            'user': user,
            'name': name,
            'firstname': firstName, 
            'profil': profil,
            'spec': spec, 
            'mail': mail, 
            'role': role,
            'password': password
        }

        console.log(newProfil)

        await fetch(POST_CREATE_ID, {
            method: 'POST',
            body: JSON.stringify(newProfil),
            headers: {
                'Content-Type': 'application/json'
            }})
        .then(console.log("done"))
        .catch(err => console.log(err))
        window.alert("Profile ajouté")
        updateData()
        history.push('/')
    }
    
    return (
            <div className="container row">
                <form className="col s12" onSubmit={Submit}>
                    <div className="row">
                        <div className="input-field col s6">
                            <input name="user" id="user" value={user} onChange={event => setUser(event.target.value)} type="text" className="validate" required/>
                            <label htmlFor="user">User</label>
                        </div>
                        <div className="input-field col s6">
                            <input name="profil" id="profil" value={profil} type="text" className="validate" disabled/>
                            <label htmlFor="profil">Profil</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <input name="nom" id="nom" value={name} onChange={event => setName(event.target.value)} type="text" className="validate" required/>
                            <label htmlFor="nom">Nom</label>
                        </div>
                        <div className="input-field col s6">
                            <input name="prenom" id="prenom" value={firstName} onChange={event => setFirstName(event.target.value)} type="text" className="validate" required/>
                            <label htmlFor="prenom">Prenom</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s6">
                            <span>Role</span>
                            <select id="role" className="browser-default validate">
                                <option value="etudiant" onClick={() => setRole("etudiant")}>Étudiant</option>
                                <option value="professeur" onClick={() => setRole("professeur")}>Professeur</option>
                                <option value="admin" onClick={() => setRole("admin")}>Admin</option>
                            </select>
                        </div>
                        <div className="col s6">
                            <span>Specialité</span>
                            <select id="role" className="browser-default validate">
                                <option value="web" onClick={() => setSpec("web")}>Dev Web</option>
                                <option value="logiciel" onClick={() => setSpec("logiciel")}>Dev Logiciel</option>
                                <option value="infra" onClick={() => setSpec("infra")}>Infrastructure Réseau</option>
                                <option value="cyber" onClick={() => setSpec("cyber")}>Cyber Sécurité</option>
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <input name="password" id="password" value={password} onChange={event => setPassword(event.target.value)} type="password" className="validate" required/>
                            <label htmlFor="password">Mot de passe</label>
                        </div>
                        <div className="input-field col s6">
                            <input name="mail" id="mail" type="email" value={mail} onChange={event => setMail(event.target.value)} className="validate" required/>
                            <label htmlFor="mail">Mail</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="right">
                            <button className="btn green waves-effect waves-light">Ajouter</button>
                        </div>
                    </div>
                </form>
            </div>
            )
}

export default AddProfil