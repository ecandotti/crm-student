import { MdModeEdit } from 'react-icons/md'
import { HiTrash } from 'react-icons/hi'

const StudentCard = (props) => {

    const deleteStudent = () => {
        fetch(`https://cors-anywhere.herokuapp.com/http://176.189.0.162:9090/eleves/delete/${props.idSelected}`)
            .then(window.alert("Etudiant supprimé"))
            .then(props.handleDashboard())
            .catch(err => console.log(err))
    }

    if(props.idSelected) { 
        const currentId = props.idSelected
        const name = props.data[currentId].nom
        const mail = props.data[currentId].mail
        const role = props.data[currentId].role
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
                            <h4 className="header">{ name }</h4>
                            <p>
                                Admin : {isAdmin ? 'OUI' : 'NON'}<br/>
                                Mail : { mail }<br/> 
                                Rôle : { role }<br/>
                                ID : { Id }
                            </p>
                        </div>
                        <div className="card-action">
                        <div className="row">
                                <button onClick={deleteStudent} className="btn red waves-effect waves-light col s4 offset-s1"><HiTrash /></button>
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