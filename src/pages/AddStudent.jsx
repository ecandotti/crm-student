import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import { POST_CREATE_ID } from '../config.json'

const AddStudent = () => {

    const history = useHistory()

    const [nom, setNom] = useState('')
    const [mail, setMail] = useState('')
    const [role] = useState('etudiant')
    const [password, setPassword] = useState('')

    const Submit = (event) => {
        event.preventDefault()

        const student = { 'nom': nom, 'mail': mail, 'password': password,'role': role }

        fetch(POST_CREATE_ID, {
            method: 'POST',
            body: JSON.stringify(student),
            headers: {
                'Content-Type': 'application/json'
            }})
        .then(console.log("done"))
        .then(() => {
            setNom('')
            setMail('')
            setPassword('')
            history.push('/')
        })
        .catch(err => console.log(err))
        window.alert("Etudiant ajouté")
        window.location.replace('/')
    }
    
    return (
            <div className="container row">
                <form className="col s12" onSubmit={Submit}>
                    <div className="row">
                        <div className="input-field col s6">
                            <input name="nom" id="nom" value={nom} onChange={event => setNom(event.target.value)} type="text" className="validate" required/>
                            <label htmlFor="nom">Nom Prénom</label>
                        </div>
                        <div className="col s6">
                            <select id="role" className="browser-default validate">
                                <option value="etudiant">Étudiant</option>
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input name="password" id="password" value={password} onChange={event => setPassword(event.target.value)} type="password" className="validate" required/>
                            <label htmlFor="password">Password</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
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

export default AddStudent