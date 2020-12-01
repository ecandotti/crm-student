// import { MdModeEdit } from 'react-icons/md'
import { HiTrash } from 'react-icons/hi'
import { FaAddressCard } from 'react-icons/fa'

const List = (props) => {

    const name = props.student.nom
    const mail = props.student.mail
    const role = props.student.role
    const id = props.student.id

    const handleSayId = (event) => {
        props.handleStudent(event.target.name)
    }

    const deleteStudent = () => {
        fetch(`https://cors-anywhere.herokuapp.com/http://176.189.0.162:9090/eleves/delete/${id}`)
            .then(window.alert("Etudiant supprimé"))
            .then(props.updateData())
            .catch(err => console.log(err))
    }

    return(
        <>
            <tr>
                <td>{ id }</td>
                <td className="center">{ name }</td>
                <td className="center">{ mail }</td>
                <td className="center">{ role }</td>
                <td className="right-align">
                    <div className="row">
                        <button onClick={deleteStudent} className="btn red waves-effect waves-light col offset-l6 l2 offset-m5 m3"><HiTrash /></button> 
                        {/* <button className="btn disabled col offset-s1 s1"><MdModeEdit /></button>  */}
                        <button onClick={handleSayId} className="btn purple col l2 offset-l1 m3 offset-m1" name={ id }><FaAddressCard /></button>
                    </div>
                </td>
            </tr>
        </>
    )
}

export default List