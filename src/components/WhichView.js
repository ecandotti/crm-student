import Grid from './Grid'
import List from './List'
import AddStudent from './AddStudent'
import StudentCard from './StudentCard'

const whichView = (props) => {

    const moded = props.isGrid
    let whichView = props.whichView

    // console.log(whichView)

    switch(whichView){
        case 'addstudent':
            return(
                <AddStudent />
            )
        case 'student':
            return(
                <StudentCard idSelected={props.idSelected} data={props.data} deleteStudent={props.deleteStudent}/>
            )
        case 'dashboard':
            if( moded ) {
                return (
                    <div>
                        <table className="striped">  
                            <thead className="blue">
                                <tr className="white-text">
                                    <th>ID</th>
                                    <th className="center">Nom</th>
                                    <th className="center">Prénom</th>
                                    <th className="center">Spécialité</th>
                                    <th className="right-align">Options</th>
                                </tr>
                            </thead>
                            <tbody>
                                { props.data.map((student) => ( <List student={student} key={student.id} handleStudent={props.handleStudent} deleteStudent={props.deleteStudent}/> )) }
                            </tbody>
                        </table>
                    </div>
                )
            } else {
                return (
                    <div className="row">
                        { props.data.map((student) => ( <Grid student={student} key={student.id} handleStudent={props.handleStudent} deleteStudent={props.deleteStudent}/> )) }
                    </div>   
                )
            }
        default:
            return('hein ?')
    }
}

export default whichView