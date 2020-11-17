import user  from '../img/man.svg'
import edit from '../img/icon/edit.svg'
import icon_trash from '../img/icon/trash.svg'

const List = (props) => {

    const name = props.student.name
    const lastName = props.student.lastName
    const speciality = props.student.speciality
    const id = props.student.id

    return(
            <tr>    
                <td>
                     <div className="delete">
                        <img src={ icon_trash } alt=""/>
                    </div>

                    <div className="edit">
                        <img src={ edit } alt=""/>
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