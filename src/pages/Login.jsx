import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import { POST_LOGIN } from '../config.json'

import { useAuth } from "../context/auth"

const Login = () => {
    const history = useHistory()
    const [isError, setIsError] = useState(false)
    const [mail, setMail] = useState("")
    const [password, setPassword] = useState("")
    const { setAuthTokens } = useAuth()

    const postLogin = () => {
        const loggin = { email: mail, password: password}
        fetch(POST_LOGIN,{
            method: 'POST',
            body: JSON.stringify(loggin),
            headers: {
                'Content-Type': 'application/json'
            }})
            .then(response => response.json())
            .then(req => {
                setAuthTokens(req.token)
                history.push("/")
            })
            .catch(err => setIsError(true))
    }

    return(
        <div className="container">
            <div className="nav-wrapper center-align">
                <h6 className="red-text">Vous devez être authentifié pour accéder à StudentManager</h6>
                <input type="email" className="center-align" placeholder="username" value={mail} onChange={e => {setMail(e.target.value) }} />
                <input type="password" className="center-align" placeholder="******" value={password} onChange={e => {setPassword(e.target.value) }} />
                { isError && "The username or password provided were incorrect!" }
                <br/><br/>
                <button className="btn green" onClick={postLogin}>Se connecter</button>
            </div>
        </div>
    )
}

export default Login