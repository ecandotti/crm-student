import '../css/ListOfStudents.css'
import userButton  from '../img/userButton.svg'

const Header = (props) => {

    let title = props.title
    let nbStudent = props.nbStudent
    let showListGrid = props.showListGrid
    
    return(
        <>
            <div>
                <h1>{title}</h1>
                <span>Nombre d'étudiant : {nbStudent} trouvés.</span>
                <div>
                    <button className="add button">
                        <p>Ajouter</p> <img src={ userButton } alt=""/>
                    </button>
                </div>
            </div>
            <button onClick={props.handler_showListGrid} className={ showListGrid  ? "button  mode  listMode" : "button mode gridMode" }></button>
        </>
    )
}

export default Header