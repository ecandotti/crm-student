import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import { Login } from './components/Login'
import { ProtectedRoute } from './protectedRoute'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import 'react-materialize'

function Manage(){
  return (
    <div>
      <Switch>
        <Route exact path="/" component={ Login } />
        <ProtectedRoute exact path="/dashboard" component={ App } />
        <Route path="*" component={() => 'ERREUR 404' } />
      </Switch>
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Manage />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
