import { MdModeEdit } from 'react-icons/md'
import { HiTrash } from 'react-icons/hi'
import { FaAddressCard } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const List = (props) => {

    const firstName = props.student.firstName
    const lastName = props.student.lastName
    const speciality = props.student.speciality
    const id = props.student.id

    return(
        <>
            <tr>
                <td>{ id }</td>
                <td className="center">{ lastName }</td>
                <td className="center">{ firstName }</td>
                <td className="center">{ speciality }</td>
                <td className="right-align">
                    <button className="btn red waves-effect waves-light col s1"><HiTrash /></button> 
                    <button className="btn disabled col offset-s1 s1"><MdModeEdit /></button> 
                    <Link to={`/student/${id}`}>
                        <button className="btn purple col offset-s1 s3"><FaAddressCard /></button>
                    </Link>
                </td>
            </tr>
        </>
    )
}

export default List