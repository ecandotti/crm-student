import Grid from './Grid'
import List from './List'

const Card = (props) => {

    const moded = props.showListGrid
    let GridView = props.students.map((student) => ( <Grid student={student} key={student.id}/> ))
    let ListView = props.students.map((student) => ( <List student={student} key={student.id}/> ))

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
                        { ListView }
                    </tbody>
                </table>
            </div>
        )
    } else {
        return (
            <div className="row">
                { GridView }
            </div>
            
        )
    }
}

export default Card