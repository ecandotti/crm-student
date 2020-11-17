import './App.css';

import React from 'react'
import { Nav } from './components/Menu'
import ListOfStudents  from './components/ListOfStudents'


class App  extends React.Component {
  constructor() {
    super()

    this.state = {
      navMenu: false,
      showSubMenu:false,
      isLogged:true,
      showListGrid:false,

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
      <div>
        <Nav showSubMenu={this.state.showSubMenu} handlerNav={this.handler_showSubMenu} handler_login={this.handler_login} />
        <ListOfStudents showListGrid={this.state.showListGrid} handler_showListGrid={this.handler_showListGrid} />
      </div>
    )
  }
}

export default App;
