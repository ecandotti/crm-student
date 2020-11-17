import user  from '../img/man.svg'
import edit from '../img/icon/edit.svg'
import icon_trash from '../img/icon/trash.svg'

const Card = (props) => {

    const name = props.student.name
    const lastName = props.student.lastName
    const speciality = props.student.lastName

    return (
        <>
            <div className="card">
                <div className="right">
                    <img src={user} alt=""/>
                </div>
                <div className="left">
                    <h3> {name}  {lastName}</h3>
                    <p> {speciality}</p>
                </div>
                <div className="top">
                    <div className="delete">
                        <a href='#'>
                            <img src={icon_trash} alt=""/>
                        </a>
                    </div>

                    <div className="edit">
                        <a href='#'>
                            <img src={edit} alt=""/>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}



const List = (props) => {

    const name = props.student.name
    const lastName = props.student.lastName
    const speciality = props.student.speciality
    const id = props.student.id

    return(
            <tr>    
                <td>
                     <div className="delete">
                        <a href='#'>
                            <img src={icon_trash} alt=""/>
                        </a>
                    </div>

                    <div className="edit">
                        <a href='#'>
                            <img src={edit} alt=""/>
                        </a>
                    </div>
                </td>

                <td>{id}</td>

                <td><img src={user} alt=""/></td>
                <td>{name}</td>
                <td>{lastName}</td>
                <td>{speciality}</td>
            </tr>
    )
}


const Cards = (props) => {

    console.log(props)
    
    const students = props.students
    const moded = props.showListGrid
    let listItems

    if(moded) {
        let enAtt = students.map((student) => <List student={student}/>)

        listItems = <table className="list">   
                    <tr>
                        <th></th>
                        <th>id</th>
                        <th>Image</th>
                        <th>First name</th>
                        <th>Last name</th>
                        <th>Spécialité</th>
                    </tr>
                    {enAtt}
                </table>
    }else {
        listItems = students.map((student) => <Card student={student}/>)
    }

    return (
        <div className="container">{listItems}</div>
    )
}

export default Cards