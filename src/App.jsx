import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { AuthContext } from "./context/auth"
import { PrivateRoute } from './PrivateRoute'

import { GET_ALL_ID } from './config.json'

import Public from './pages/Public'
import Login from './pages/Login'
import AddStudent from './pages/AddStudent'
import StudentCard from './pages/StudentCard'
import List from './pages/List'

import Header from './components/Header'
import Navigation from './components/Navigation'

const App = () => {

    const [authTokens, setAuthTokens] = useState('')
    const [isLoggedIn, setLoggedIn] = useState(false)
    const [allStudents, setAllStudents] = useState([])

    const setTokens = (data) => {
        localStorage.setItem("tokens", JSON.stringify(data));
        setAuthTokens(data)
        setLoggedIn(true)
    }

    const updateData = () => {
        fetch(GET_ALL_ID)
            .then(response => response.json())
            .then(data => {
                setAllStudents(data)
            })
    }

    useEffect(() => {
        updateData()
    },[])

    return (
            <div>
                <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
                    <Router>
                        <Header isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn}/>
                        <Navigation nbStudents={allStudents.length} isLoggedIn={isLoggedIn}/>
                        <Switch>
                            <Route exact path="/public" component={Public} />
                            <Route exact path="/login" component={() => <Login isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn}/>} />
                            <PrivateRoute exact path="/" component={() => <List allStudents={allStudents}/> } />
                            <PrivateRoute exact path="/addstudent" component={AddStudent} />
                            <PrivateRoute exact path="/student/:id" component={StudentCard} />
                            <Route path="*" component={() => 'ERREUR 404' } />
                        </Switch>
                    </Router>
                </AuthContext.Provider>
            </div>
            )
}

export default App
