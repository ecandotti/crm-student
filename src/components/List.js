// import { MdModeEdit } from 'react-icons/md'
import { HiTrash } from 'react-icons/hi'
import { FaAddressCard } from 'react-icons/fa'

const List = (props) => {

    const firstName = props.student.firstName
    const lastName = props.student.lastName
    const Speciality = props.student.speciality
    const Id = props.student.id

    const handleSayId = (event) => {
        props.handleStudent(event.target.name)
    }

    return(
        <>
            <tr>
                <td>{ Id }</td>
                <td className="center">{ lastName }</td>
                <td className="center">{ firstName }</td>
                <td className="center">{ Speciality }</td>
                <td className="right-align">
                    <div className="row">
                        <button className="btn red waves-effect waves-light col offset-l6 l2 offset-m5 m3"><HiTrash /></button> 
                        {/* <button className="btn disabled col offset-s1 s1"><MdModeEdit /></button>  */}
                        <button onClick={handleSayId} className="btn purple col l2 offset-l1 m3 offset-m1" name={ Id }><FaAddressCard /></button>
                    </div>
                </td>
            </tr>
        </>
    )
}

export default List