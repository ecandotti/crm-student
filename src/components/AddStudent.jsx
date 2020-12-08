import React from 'react'

import { POST_CREATE_ID } from '../config.json'

class AddStudent extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            nom: '',
            mail: '',
            role: 'etudiant',
            password: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()

        const name = this.state.nom
        const mail = this.state.mail
        const role = this.state.role
        const password = this.state.password

        const student = { 'nom': name, 'mail': mail, 'password': password,'role': role }

        fetch(POST_CREATE_ID, {
            method: 'POST',
            body: JSON.stringify(student),
            headers: {
                'Content-Type': 'application/json'
            }})
        .then(console.log("done"))
        .then(this.setState({
                    name: '',
                    mail: '',
                    role: 'etudiant',
                    password: ''
            }))
        .catch(err => console.log(err))
        window.alert("Etudiant ajouté")
        window.location.replace('/')
    }

    render() {
        return (
            <div className="container row">
                <form className="col s12" onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="input-field col s6">
                            <input name="nom" id="nom" value={this.state.nom} onChange={this.handleChange} type="text" className="validate" required/>
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
                            <input name="password" id="password" value={this.state.password} onChange={this.handleChange} type="password" className="validate" required/>
                            <label htmlFor="password">Password</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input name="mail" id="mail" type="email" value={this.state.mail} onChange={this.handleChange} className="validate" required/>
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
}

export default AddStudent