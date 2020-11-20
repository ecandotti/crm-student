import { FaUserPlus, FaListUl } from 'react-icons/fa'
import { AiFillHome } from 'react-icons/ai'
import { BsGrid3X3Gap } from 'react-icons/bs'

const Header = (props) => {
    
    let headerTitle = 'Student Manager'
    let nbStudent = props.nbStudent
    let isGrid = props.isGrid

    return(
        <>
            <div className="row">

                <h3 className="col s12">{ headerTitle }</h3>

                <div className="col s6">
                    Nombre d'étudiant : { nbStudent } trouvés.
                </div>
                <div className="col s6 right-align">
                    <button onClick={props.handleAddStudent} className="btn green waves-effect waves-light">
                        <FaUserPlus />
                    </button>&#160;
                    <button onClick={props.handleDashboard} className="btn orange waves-effect waves-light">
                        <AiFillHome />
                    </button>&#160;
                    <button onClick={props.handleGrid} className="btn brown waves-effect waves-light">
                        {isGrid ? <BsGrid3X3Gap /> : <FaListUl />}
                    </button>&#160;
                </div>
            </div>
        </>
    )
}

export default Header