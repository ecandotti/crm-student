import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'

// import { POST_LOGIN } from '../config.json'

import { useAuth } from "../context/auth"

const Login = (props) => {
    // const [isError, setIsError] = useState(false)
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const { setAuthTokens } = useAuth()

    const postLogin = () => {
        // const val_log = { nom: userName, password: password}
        // fetch(POST_LOGIN,{
        //     method: 'POST',
        //     body: JSON.stringify(val_log),
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }})
        //     .then(response => response.json())
        //     .then(req => {
        //         console.log(req)
        //         setAuthTokens(req.data)
        //     })
        //     .then(setLoggedIn(true))
        //     .catch(err => setIsError(true))
        setAuthTokens("oiahfpozihfapoihfpoh")
        props.setLoggedIn(true)
      }
    
      if (props.isLoggedIn) {
        return <Redirect to="/" />
    }
    return(
        <div className="container">
            <div className="nav-wrapper center-align">
                <h6 className="red-text">Vous devez être authentifié pour accéder à StudentManager</h6>
                <input type="text" className="center-align" placeholder="username" value={userName} onChange={e => {setUserName(e.target.value) }} />
                <input type="password" className="center-align" placeholder="******" value={password} onChange={e => {setPassword(e.target.value) }} />
                { /* isError && "The username or password provided were incorrect!" */}
                <button className="btn green" onClick={postLogin}>Se connecter</button>
            </div>
        </div>
    )
}

export default Login