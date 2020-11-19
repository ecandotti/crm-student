import React from 'react'

class AddStudent extends React.Component {
    render(){
        return (
            <div className="row">
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="first_name" type="text" className="validate" />
                            <label htmlFor="first_name">Prénom</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="last_name" type="text" className="validate"/>
                            <label htmlFor="last_name">Nom</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="password" type="password" className="validate" />
                            <label htmlFor="password">Password</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="email" type="email" className="validate" />
                            <label htmlFor="email">Email</label>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default AddStudent