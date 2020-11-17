import '../css/ListOfStudents.css'

const Header = (props) => {

    let title = props.title
    let nbStudent = props.nbStudent
    
    return(
        <>
            <h1>{title}</h1>
            <p>
                Nombre d'étudiant : {nbStudent} trouvés.
            </p>
        </>
    )
}

export default Header