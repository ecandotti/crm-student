import React from 'react'
import NavBar from './NavBar'
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
        <NavBar showSubMenu={this.state.showSubMenu} handlerNav={this.handler_showSubMenu} handler_login={this.handler_login} />
        <div className="container">
          <ListOfStudents showListGrid={this.state.showListGrid} handler_showListGrid={this.handler_showListGrid} />
        </div>
      </>
    )
  }
}

export default App
