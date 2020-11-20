import React from 'react'
import auth from '../auth'

export const Login = (props) => {
    return(
        <div className="container">
            <div className="nav-wrapper center-align">
                <h3>Student Manager</h3>
                <input className="center-align" placeholder="admin" disabled />
                <input className="center-align" placeholder="******" disabled />
                <button className="btn green" onClick={
                    () => {
                        auth.login(() => {
                            props.history.push('/dashboard')
                        })
                    }
                }>Se connecter</button>
            </div>
        </div>
    )
}