import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import AddStudent from './AddStudent'
import NavBar from './NavBar'
import Header from './Header'
import ListOfStudents from './ListOfStudents'
import 'materialize-css'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      navMenu: false,
      showSubMenu: false,
      isLogged: true,
      showListGrid: false,
      studentsArray: [
            {name:'Joe', lastName:'hell', speciality:"dev mobile", id:"0920Kda"},
            {name:'Joe', lastName:'hell', speciality:"dev mobile", id:"0920Kdz"},
            {name:'Joe', lastName:'hell', speciality:"dev mobile", id:"0920Kde"},
            {name:'Joe', lastName:'hell', speciality:"dev mobile", id:"0920Kdr"},
            {name:'Joe', lastName:'hell', speciality:"dev mobile", id:"0920Kdt"},
            {name:'Joe', lastName:'hell', speciality:"dev mobile", id:"0920Kdy"},
            {name:'Joe', lastName:'hell', speciality:"dev mobile", id:"0920Kdu"}
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
            <div className="container"><Header title="Liste d'étudiants" nbStudent={this.state.studentsArray.length} showListGrid={this.state.showListGrid} handler_showListGrid={this.handler_showListGrid}/></div>
            <Switch>
                <Route path="/addstudent">
                    <div className="container">
                        <AddStudent />
                    </div>
                </Route>
                <Route path="/">
                    <div className="container">
                        <ListOfStudents showListGrid={this.state.showListGrid} handler_showListGrid={this.handler_showListGrid} />
                    </div>
                </Route>
            </Switch>
        </Router>
      </>
    )
  }
}

export default App
