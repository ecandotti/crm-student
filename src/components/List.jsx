import React from 'react'

import Item from './Item'

const List = (props) => {
    return(
        <div className="container">
            <div>
                <table className="striped">
                    <thead className="blue">
                        <tr className="white-text">
                            <th>ID</th>
                            <th className="center">Nom Prénom</th>
                            <th className="center">Mail</th>
                            <th className="center">Rôle</th>
                            <th className="right-align">Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            props.studentsArray.map((student) => (<Item key={student.id} student={student} />))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default List