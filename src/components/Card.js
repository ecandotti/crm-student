import Grid from './Grid'
import List from './List'

const Card = (props) => {

    const moded = props.showListGrid

    if( moded ) {

        let ListView = props.students.map((student) => ( <List student={student} key={student.id}/> ))
        return (
            <div className="container">
                <table className="list">  
                    <tbody className="list">
                        <tr>
                            <th></th>
                            <th>id</th>
                            <th>Image</th>
                            <th>First name</th>
                            <th>Last name</th>
                            <th>Spécialité</th>
                        </tr>
                        { ListView }
                    </tbody> 
                </table>
            </div>
        )
    } else {

        let GridView = props.students.map((student) => ( <Grid student={student} key={student.id}/> ))
        return (
            <div className="container">
                { GridView }
            </div>
        )
    }
}

export default Card