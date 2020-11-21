import React from 'react'

class AddStudent extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            speciality: '',
            id: '',
            isAdmin: 'false'
        };
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
        //console.log(event.target.value);
    }

    handleSubmit = event => {
        event.preventDefault();

        const firstName = this.state.firstName
        const lastName = this.state.lastName
        const speciality = this.state.speciality
        const id = this.state.id
        const isAdmin = this.state.isAdmin

        const student = { firstName, lastName, speciality, id, isAdmin };
        //console.log(this.state.firstName);
        this.props.addStudent(student);
        this.setState({
            firstName: '',
            lastName: '',
            speciality: '',
            id: '',
            isAdmin: 'false'
        });
    }

    render() {
        return (
            <div className="row">
                <form className="col s12" onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="input-field col s6">
                            <input name="firstName" value={this.state.firstName} onChange={this.handleChange} type="text" className="validate" />
                            <label htmlFor="first_name">Prénom</label>
                        </div>
                        <div className="input-field col s6">
                            <input name="lastName" value={this.state.lastName} onChange={this.handleChange} type="text" className="validate" />
                            <label htmlFor="last_name">Nom</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input name="speciality" value={this.state.speciality} onChange={this.handleChange} type="text" className="validate" />
                            <label htmlFor="speciality">Speciality</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input name="password" type="password" className="validate" />
                            <label htmlFor="password">Password</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input name="email" type="email" className="validate" />
                            <label htmlFor="email">Email</label>
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