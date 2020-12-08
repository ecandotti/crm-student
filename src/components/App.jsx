import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { GET_ALL_ID } from '../config.json'

import Header from './Header'
import Navigation from './Navigation'
import List from './List'
import AddStudent from './AddStudent'
import StudentCard from './StudentCard'

class App extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            studentsArray: []
        }
    }

    updateData() {
        fetch(GET_ALL_ID)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    studentsArray: data
                })
                console.log(data)
            })
    }

    componentDidMount() {
        this.updateData()
    }

    render() {
        return (
            <div>
                <Router>
                    <Header />
                    <Navigation nbStudent={this.state.studentsArray.length} />
                    <Switch>
                        <Route exact path="/">
                            <List studentsArray={this.state.studentsArray} />
                        </Route>
                        <Route exact path="/addstudent">
                            <AddStudent />
                        </Route>
                        <Route exact path="/student/:id">
                            <StudentCard />
                        </Route>
                        <Route path="*" component={() => 'ERREUR 404' } />
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default App
