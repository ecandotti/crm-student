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
            studentsArray: []
        }

        this.handleGrid = this.handleGrid.bind(this)
        this.handleDashboard = this.handleDashboard.bind(this)
        this.handleAddStudent = this.handleAddStudent.bind(this)
        this.handleStudent = this.handleStudent.bind(this)
        this.deleteStudent = this.deleteStudent.bind(this)
    }

    updateData() {

        //Simulation req
        let reqApi = [
            { firstName: 'Luffy', lastName: 'Monkey D', speciality: "Gum Gum", id: "0", isAdmin: true },
            { firstName: 'Zoro', lastName: 'Roronoa', speciality: "3 Sabres", id: "1", isAdmin: true },
            { firstName: 'Robin', lastName: 'Nico', speciality: "Hana Hana", id: "2", isAdmin: false },
            { firstName: 'Sanji', lastName: 'Vinsmoke', speciality: "Jambe Noir", id: "3", isAdmin: false },
            { firstName: 'Chopper', lastName: 'Tony-Tony', speciality: "Hito Hito", id: "4", isAdmin: false },
            { firstName: 'Flam', lastName: 'Cutty', speciality: "Charpentier", id: "5", isAdmin: false },
            { firstName: 'Usopp', lastName: 'SinperKing', speciality: "Sniper", id: "6", isAdmin: false }
        ]

        let temp_array = []

        temp_array.push.apply(temp_array, reqApi)
        this.setState({
            studentsArray: temp_array
        })
    }

    addStudent = student => {
        // student: { firstName: '', lastName: '', speciality: "", id: "", isAdmin: false }

        // List + added student
        const students = this.state.studentsArray.slice();
        students.push(student);

        console.log(students);

        // Set the new list to current array of students
        // Need changes to parse the new data to the database
        //this.setState({ studentsArray: students });

        window.alert("Etudiant ajouté!");
    }

    deleteStudent() {
        window.alert("Etudiant supprimé");
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
                    <WhichView
                        data={this.state.studentsArray}
                        isGrid={this.state.isGrid}
                        whichView={this.state.whichView}
                        idSelected={this.state.idSelected}
                        handleStudent={this.handleStudent}
                        deleteStudent={this.deleteStudent}
                        addStudent={this.addStudent}
                    />
                </div>

            </>
        )
    }
}

export default App
