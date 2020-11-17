import user  from '../img/man.svg'
import edit from '../img/icon/edit.svg'
import icon_trash from '../img/icon/trash.svg'

const Grid = (props) => {

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
                        <img src={icon_trash} alt=""/>
                    </div>

                    <div className="edit">
                        <img src={edit} alt=""/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Grid