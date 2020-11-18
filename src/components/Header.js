//import '../css/ListOfStudents.css'
import { FiUserPlus } from 'react-icons/fi'
import { ImList2 } from 'react-icons/im'
import { BsFillGrid3X3GapFill } from 'react-icons/bs'
import { AiFillHome } from 'react-icons/ai'
import { Link } from 'react-router-dom'


const Header = (props) => {

    let title = props.title
    let nbStudent = props.nbStudent
    let showListGrid = props.showListGrid
    
    return(
        <>
            <div className="row">

                <h3 className="col s12">{title}</h3>

                <div className="col s6">
                    Nombre d'étudiant : {nbStudent} trouvés.
                </div>
                <div className="col s6 right-align">
                    <Link to="/addstudent">
                        <button className="btn green waves-effect waves-light">
                            <FiUserPlus />
                        </button>&#160;
                    </Link>
                    <Link to="/">
                        <button className="btn blue waves-effect waves-light">
                            <AiFillHome />
                        </button>&#160;
                    </Link>
                    <button onClick={props.handler_showListGrid} className="btn brown waves-effect waves-light">
                        { showListGrid  ? <BsFillGrid3X3GapFill /> : <ImList2 /> }
                    </button>
                </div>
            </div>
        </>
    )
}

export default Header