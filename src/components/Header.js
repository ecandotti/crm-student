import { ImList2 } from 'react-icons/im'
import { BsFillGrid3X3GapFill } from 'react-icons/bs'
import { FaUserGraduate, FaUserPlus } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Header = (props) => {
    
    let headerTitle = props.headerTitle
    let nbStudent = props.nbStudent
    let showListGrid = props.showListGrid

    return(
        <>
            <div className="row">

                <h3 className="col s12">{ headerTitle }</h3>

                <div className="col s6">
                    Nombre d'étudiant : { nbStudent } trouvés.
                </div>
                <div className="col s6 right-align">
                    <Link to="/addstudent">
                        <button className="btn green waves-effect waves-light">
                            <FaUserPlus />
                        </button>&#160;
                    </Link>
                    <Link to="/students">
                        <button className="btn blue waves-effect waves-light">
                            <FaUserGraduate />
                        </button>&#160;
                    </Link>
                    <button onClick={ props.handler_showListGrid } className="btn brown waves-effect waves-light">
                        { showListGrid  ? <BsFillGrid3X3GapFill /> : <ImList2 /> }
                    </button>&#160;
                </div>
            </div>
        </>
    )
}

export default Header