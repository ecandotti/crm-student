import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import AddStudent from './AddStudent'
import NavBar from './NavBar'
import Header from './Header'
import WhichView from './WhichView'
import StudentCard from './StudentCard'
import 'materialize-css'

class App extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            headerTitle: 'Student Manager',
            navMenu: false,
            showSubMenu: false,
            isLogged: true,
            showListGrid: false,
            studentsArray: [
                { firstName:'Enzo', lastName:'hell', speciality:"dev mobile", id:"0" },
                { firstName:'Leo', lastName:'hell', speciality:"dev mobile", id:"1" },
                { firstName:'Joe', lastName:'hell', speciality:"dev mobile", id:"2" },
                { firstName:'Paul', lastName:'hell', speciality:"dev mobile", id:"3" },
                { firstName:'Marie', lastName:'hell', speciality:"dev mobile", id:"4" },
                { firstName:'Joe', lastName:'hell', speciality:"dev mobile", id:"5" },
                { firstName:'Joe', lastName:'hell', speciality:"dev mobile", id:"6" }
            ]
        }

        this.handler_showSubMenu = this.handler_showSubMenu.bind(this)
        this.handler_login = this.handler_login.bind(this)
    }

    handler_showListGrid = () => {
        this.setState(state => ({ showListGrid: !state.showListGrid } ))
    }

    handler_showSubMenu = () => {
        this.setState(state => ({ showSubMenu: !state.showSubMenu } ))
    }

    handler_login = () => {
        this.setState(state => ({ isLogged: !state.isLogged } ))
    }
    

    render(){
        return (
            <>
                <Router>
                    <NavBar showSubMenu={this.state.showSubMenu} handlerNav={this.handler_showSubMenu} handler_login={this.handler_login} />
                    <div className="container">
                        <Header headerTitle={ this.state.headerTitle } nbStudent={this.state.studentsArray.length} showListGrid={this.state.showListGrid} handler_showListGrid={this.handler_showListGrid}/>
                        <Switch>
                            <Route path={`/student/:studentId`}>
                                <StudentCard data={this.state.studentsArray} />
                            </Route>
                            <Route path="/addstudent">
                                <AddStudent />
                            </Route>
                            <Route path="/students">
                                <WhichView showListGrid={this.state.showListGrid} data={this.state.studentsArray} />
                            </Route>
                        </Switch>
                    </div>
                </Router>
            </>
        )
    }
}

export default App
