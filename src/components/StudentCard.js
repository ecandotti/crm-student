import { MdModeEdit } from 'react-icons/md'
import { HiTrash } from 'react-icons/hi'

const StudentCard = (props) => {

    if(props.idSelected) { 
        console.log(props.idSelected)
        const currentId = props.idSelected
        const firstName = props.data[currentId].firstName
        const lastName = props.data[currentId].lastName
        const Speciality = props.data[currentId].speciality
        const Id = props.data[currentId].id
        const isAdmin = props.data[currentId].isAdmin
            
        let studentData

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
                                Specialité : { Speciality }<br/>
                                ID : { Id }
                            </p>
                        </div>
                        <div className="card-action">
                        <div className="row">
                                <button className="btn red waves-effect waves-light col s4 offset-s1"><HiTrash /></button>
                                <button className="btn disabled col offset-s1 s4"><MdModeEdit /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
        return (
            <div>
                <div>{ studentData }</div>
                <div>{ console.log(props) }</div>
            </div>
        )
    } else { 
        return (
            <h4 className="red warning center white-text">Résultat introuvable 😬</h4>
        )
    }  
}

export default StudentCard