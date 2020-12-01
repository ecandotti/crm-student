import React from 'react'
import NavBar from './NavBar'
import WhichView from './WhichView'
import 'materialize-css'
import Header from './Header'

class App extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            whichView: 'dashboard',
            headerTitle: 'Student Manager',
            idSelected: null,
            isGrid: false,
            studentsArray: [],
            isLoading: true
        }

        this.handleGrid = this.handleGrid.bind(this)
        this.handleDashboard = this.handleDashboard.bind(this)
        this.handleAddStudent = this.handleAddStudent.bind(this)
        this.handleStudent = this.handleStudent.bind(this)
        this.updateData = this.updateData.bind(this)
    }

    updateData() {
        fetch('https://cors-anywhere.herokuapp.com/http://176.189.0.162:9090/eleves/all')
            .then(this.setState({isLoading: true}))
            .then(response => response.json())
            .then(data => {
                this.setState({
                    studentsArray: data,
                    isLoading: false
                })
            })
    }

    componentDidMount() {
        this.updateData()
    }

    handleGrid() {
        this.setState({
            whichView: 'dashboard',
            isGrid: !this.state.isGrid
        })
    }

    handleAddStudent() {
        this.setState({
            whichView: 'addstudent'
        })
    }

    handleDashboard() {
        this.setState({
            whichView: 'dashboard'
        })
        this.updateData()
    }

    handleStudent(idStudent) {
        if (idStudent) {
            this.setState({
                idSelected: idStudent,
                whichView: 'student'
            })
        } else {
            window.alert('Une erreur est survénu, veuillez réessayer')
        }
    }

    render() {
        return (
            <>
                <NavBar {...this.props} handleDashboard={this.handleDashboard} />
                <div className="container">
                    <Header
                        nbStudent={this.state.studentsArray.length}
                        whichView={this.state.whichView}
                        isGrid={this.state.isGrid}
                        handleGrid={this.handleGrid}
                        handleAddStudent={this.handleAddStudent}
                        handleDashboard={this.handleDashboard}
                    />
                    {
                    this.state.isLoading ? <img src="https://media3.giphy.com/media/3oEjI6SIIHBdRxXI40/200.gif" alt="loading"/> :
                        <WhichView
                            data={this.state.studentsArray}
                            isGrid={this.state.isGrid}
                            whichView={this.state.whichView}
                            idSelected={this.state.idSelected}
                            handleStudent={this.handleStudent}
                            handleDashboard={this.handleDashboard}
                            updateData={this.updateData}
                            addStudent={this.addStudent}
                        />
                    }
                </div>

            </>
        )
    }
}

export default App
