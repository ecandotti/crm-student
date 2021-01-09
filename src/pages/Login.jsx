import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import { POST_LOGIN } from '../config.json'

import { useAuth } from "../context/auth"

const Login = () => {
    const history = useHistory()
    const [isError, setIsError] = useState(false)
    const [user, setUser] = useState("")
    const [password, setPassword] = useState("")
    const { setAuthTokens } = useAuth()

    const postLogin = () => {
        const loggin = { 'user': user, 'password': password}
        fetch(POST_LOGIN,{
            method: 'POST',
            body: JSON.stringify(loggin),
            headers: {
                'Content-Type': 'application/json'
            }})
            .then(response => response.json())
            .then(req => {
                setAuthTokens(req.remember_token)
                history.push("/")
            })
            .catch(err => setIsError(true))

        // setAuthTokens('eozivneon')
        // history.push("/")
    }

    return(
        <div className="container">
            <div className="nav-wrapper center-align">
                <h6 className="red-text">Vous devez être authentifié pour accéder à StudentManager</h6>
                <input type="text" className="center-align" placeholder="username" value={user} onChange={e => {setUser(e.target.value) }} />
                <input type="password" className="center-align" placeholder="******" value={password} onChange={e => {setPassword(e.target.value) }} />
                { isError && "Le mot de passe ou le user est faux !" }
                <br/><br/>
                <button className="btn green" onClick={postLogin}>Se connecter</button>
            </div>
        </div>
    )
}

export default Login