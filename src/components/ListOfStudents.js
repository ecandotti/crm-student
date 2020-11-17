import { TitleBasic } from './TitleBasics'
import Cards from './Card'
import userButton  from '../img/userButton.svg'
//import image_list from '../img/list.png'
//import image_grid from '../img/grid.png'

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
                <div className="top">
                    <div className="heading">        
                        <div>
                            <TitleBasic title="Liste d'étudiants" nbStudent={studentsArray.length}/>
                            <div>
                                <button className="add button">
                                    <p>ajouter</p> <img src={userButton} alt=""/>
                                </button>
                            </div>
                        </div>
                    </div>
                    <button onClick={props.handler_showListGrid} className={showListGrid  ? "button  mode  listMode" : "button mode gridMode"}></button>
                </div>
                <Cards showListGrid={showListGrid} students={studentsArray}/>
            </>
        )
}

export default  ListOfStudents