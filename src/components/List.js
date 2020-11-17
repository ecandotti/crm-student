import user  from '../img/man.svg'
import { MdModeEdit } from 'react-icons/md'
import { HiTrash } from 'react-icons/hi'

const List = (props) => {

    const name = props.student.name
    const lastName = props.student.lastName
    const speciality = props.student.speciality
    const id = props.student.id

    return(
            <tr>    
                <td>
                     <div className="delete">
                        <HiTrash />
                    </div>

                    <div className="edit">
                        <MdModeEdit />
                    </div>
                </td>

                <td>{id}</td>

                <td><img src={ user } alt=""/></td>
                <td>{name}</td>
                <td>{lastName}</td>
                <td>{speciality}</td>
            </tr>
    )
}

export default List