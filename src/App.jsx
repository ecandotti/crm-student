import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { AuthContext } from "./context/auth"
import { PrivateRoute } from './PrivateRoute'

import { GET_ALL_ID } from './config.json'

import Login from './pages/Login'
import AddProfil from './pages/AddProfil'
import ProfilCard from './pages/ProfilCard'
import List from './pages/List'

import Header from './components/Header'
import Navigation from './components/Navigation'
import { DataContext } from './context/data'

const App = () => {

    const [authTokens, setAuthTokens] = useState('')
    const [allProfils, setAllProfils] = useState([])

    const setTokens = (data) => {
        localStorage.setItem("tokens", JSON.stringify(data));
        setAuthTokens(data)
    }

    const updateData = () => {
        fetch(GET_ALL_ID)
            .then(response => response.json())
            .then(data => {
                setAllProfils(data)
            })
    }

    useEffect(() => {
        updateData()
    },[])

    return (
            <div>
                <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
                    <DataContext.Provider value={{updateData, allProfils}}>
                        <Router>
                            <Header />
                            <Navigation />
                            <Switch>
                                <Route exact path="/login" component={Login} />
                                <PrivateRoute exact path="/" component={List} />
                                <PrivateRoute exact path="/addprofil" component={AddProfil} />
                                <PrivateRoute exact path="/profil/:id" component={ProfilCard} />
                                <Route path="*" component={() => 'ERREUR 404' } />
                            </Switch>
                        </Router>
                    </DataContext.Provider>
                </AuthContext.Provider>
            </div>
            )
}

export default App
