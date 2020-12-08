import { FaUserPlus } from 'react-icons/fa'
import { AiFillHome } from 'react-icons/ai'
import { NavLink } from 'react-router-dom'

const Navigation = (props) => {
    
    let title = 'Student Manager'
    let nbStudent = props.nbStudent

    const ButtonStyle = {
        marginLeft: '5px',
        marginRight: '5px'
    }
    return(
        <>
            <div className="container row">

                <h3 className="col s12">{ title }</h3>

                <div className="col s6">
                    Nombre d'étudiant : { nbStudent } trouvés.
                </div>
                <div className="col s6 right-align">
                    <NavLink to="/addstudent" className="btn green waves-effect waves-light" style={ButtonStyle}>
                        <FaUserPlus />
                    </NavLink>
                    <NavLink to="/" className="btn orange waves-effect waves-light" style={ButtonStyle}>
                        <AiFillHome />
                    </NavLink>
                </div>
            </div>
        </>
    )
}

export default Navigation