import Grid from './Grid'
import List from './List'

const Card = (props) => {

    const moded = props.showListGrid
    let GridView = props.students.map((student) => ( <Grid student={student} key={student.id}/> ))
    let ListView = props.students.map((student) => ( <List student={student} key={student.id}/> ))

    if( moded ) {

        return (
            <div>
                <table>  
                    <tbody>
                        <tr>
                            <th></th>
                            <th>ID</th>
                            <th>Photo de profile</th>
                            <th>Prénom</th>
                            <th>Nom</th>
                            <th>Spécialité</th>
                        </tr>
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