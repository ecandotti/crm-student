// import { MdModeEdit } from 'react-icons/md'
import { HiTrash } from 'react-icons/hi'
import { FaAddressCard } from 'react-icons/fa'

const Grid = (props) => {

    const firstName = props.student.firstName
    const lastName = props.student.lastName
    const Speciality = props.student.speciality
    const Id = props.student.id
    const isAdmin = props.student.isAdmin

    const handleSayId = (event) => {
        props.handleStudent(event.target.name)
    }

    return (
        <>
            <div className="col s12 l6">
                <div className="card horizontal">
                    <div className="card-image center-align valign-wrapper">
                        <img src="https://icons-for-free.com/iconfiles/png/512/human+person+user+icon-1320196276306824343.png" alt=""/>
                    </div>
                    <div className="card-stacked">
                        <div className="card-content">
                            <h4 className="header">{ firstName }  { lastName }</h4>
                            <p>
                                Admin : { isAdmin ? 'OUI' : 'NON' }<br/>
                                Specialité : { Speciality } <br/>
                                ID : { Id }
                            </p>
                        </div>
                        <div className="card-action">
                            <div className="row center-align">
                                <button className="btn red waves-effect waves-light col s4 offset-s1"><HiTrash /></button> 
                                {/* <button className="btn disabled col offset-s1 s3"><MdModeEdit /></button> */}
                                <button onClick={handleSayId} className="btn purple col offset-s1 s4" name={ Id }><FaAddressCard /></button>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Grid