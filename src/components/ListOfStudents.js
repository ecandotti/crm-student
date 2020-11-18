import Card from './Card'

const ListOfStudents = (props) => {

    const studentsArray = [
        {name:'Joe', lastName:'hell', speciality:"dev mobile", id:"0920Kda"},
        {name:'Joe', lastName:'hell', speciality:"dev mobile", id:"0920Kdz"},
        {name:'Joe', lastName:'hell', speciality:"dev mobile", id:"0920Kde"},
        {name:'Joe', lastName:'hell', speciality:"dev mobile", id:"0920Kdr"},
        {name:'Joe', lastName:'hell', speciality:"dev mobile", id:"0920Kdt"},
        {name:'Joe', lastName:'hell', speciality:"dev mobile", id:"0920Kdy"},
        {name:'Joe', lastName:'hell', speciality:"dev mobile", id:"0920Kdu"}
    ]

    console.log(studentsArray)

    let showListGrid = props.showListGrid

        return(
            <>
                <Card showListGrid={showListGrid} students={studentsArray}/>
            </>
        )
}

export default ListOfStudents