import { FaAddressCard } from 'react-icons/fa'
import { HiTrash } from 'react-icons/hi'
import { NavLink } from 'react-router-dom'

import { GET_DELETE_ID } from '../config.json'

const Item = (props) => {

    const name = props.student.nom
    const mail = props.student.mail
    const role = props.student.role
    const id = props.student.id

    const deleteStudent = () => {
        fetch(GET_DELETE_ID + id)
            .then(window.alert("Etudiant supprimé"))
            .then(document.location.reload())
            .catch(err => console.log(err))
    }
    
    const ButtonStyle = {
        margin: '5px'
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
                        <div onClick={deleteStudent} className="btn red waves-effect waves-light" style={ButtonStyle}><HiTrash /></div>
                        <NavLink to={`/student/${id}`} className="btn purple waves-effect waves-light" style={ButtonStyle}><FaAddressCard /></NavLink>
                    </div>
                </td>
            </tr>
        </>
    )
}

export default Item