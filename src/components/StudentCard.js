import { MdModeEdit } from 'react-icons/md'
import { HiTrash } from 'react-icons/hi'
import { FaAddressCard } from 'react-icons/fa'
import { useParams } from 'react-router-dom'

const StudentCard = ({ data }) => {

        const { studentId } = useParams()
        const firstName = data[studentId].firstName
        const lastName = data[studentId].lastName
        const speciality = data[studentId].speciality
        const id = data[studentId].id
        const isAdmin = false
        
        let studentData

        if (studentId) {
            studentData = (
                <div className="col s12 m12 l12">
                    <div className="card horizontal">
                        <div className="card-image center-align valign-wrapper">
                            <img src="https://icons-for-free.com/iconfiles/png/512/human+person+user+icon-1320196276306824343.png" alt=""/>
                        </div>
                        <div className="card-stacked">
                            <div className="card-content">
                                <h4 className="header">{ firstName } { lastName }</h4>
                                <p>
                                    Admin : {isAdmin ? 'OUI' : 'NON'}<br/>
                                    Specialité : { speciality }<br/>
                                    ID : { id }
                                </p>
                            </div>
                            <div className="card-action">
                                <button className="btn red waves-effect waves-light col s4"><HiTrash /></button> <button className="btn disabled col s4"><MdModeEdit /></button> <button className="btn disabled col s4"><FaAddressCard /></button> 
                            </div>
                        </div>
                    </div>
                </div>
            )
        } else {
            studentData = <h4 className="red warning center white-text">Désolé, aucun étudiant trouvé </h4>;
        }
        
        return (
            <div>
                <div>{studentData}</div>
            </div>
        )
}

export default StudentCard