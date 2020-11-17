import { MdModeEdit } from 'react-icons/md'
import { HiTrash } from 'react-icons/hi'

const Grid = (props) => {

    const firstName = props.student.name
    const lastName = props.student.lastName
    const speciality = props.student.speciality

    return (
        <>
            <div className="col s6 m6 l6">
                <div className="card horizontal">
                <div className="card-image">
                    <img src="https://icons-for-free.com/iconfiles/png/512/human+person+user+icon-1320196276306824343.png" alt=""/>
                </div>
                <div className="card-stacked">
                    <div className="card-content">
                        <h3 className="header">{ firstName }  { lastName }</h3>
                        <p>Admin : ?<br/>{ speciality }</p>
                    </div>
                    <div className="card-action">
                        <button className="btn red waves-effect waves-light"><HiTrash /></button> <button className="btn disabled"><MdModeEdit /></button>
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}

export default Grid