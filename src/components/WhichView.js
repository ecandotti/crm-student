import Grid from './Grid'
import List from './List'
import AddStudent from './AddStudent'
import StudentCard from './StudentCard'

const whichView = (props) => {

    const moded = props.isGrid
    let whichView = props.whichView

    switch (whichView) {
        case 'addstudent':
            return (
                <AddStudent data={props.data} addStudent={props.addStudent} updateData={props.updateData} handleDashboard={props.handleDashboard}/>
            )
        case 'student':
            return (
                <StudentCard data={props.data} handleDashboard={props.handleDashboard} idSelected={props.idSelected}/>
            )
        case 'dashboard':
            if (moded) {
                return (
                    <div>
                        <table className="striped">
                            <thead className="blue">
                                <tr className="white-text">
                                    <th>ID</th>
                                    <th className="center">Nom Prénom</th>
                                    <th className="center">Mail</th>
                                    <th className="center">Rôle</th>
                                    <th className="right-align">Options</th>
                                </tr>
                            </thead>
                            <tbody>
                                {props.data.map((student) => (<List student={student} key={student.id} handleStudent={props.handleStudent} updateData={props.updateData}/>))}
                            </tbody>
                        </table>
                    </div>
                )
            } else {
                return (
                    <div className="row">
                        { props.data.map((student) => (<Grid student={student} key={student.id} handleStudent={props.handleStudent} updateData={props.updateData}/>))}
                    </div>
                )
            }
        default:
            return ('hein ?')
    }
}

export default whichView