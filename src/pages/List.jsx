import React from 'react'

import Item from '../components/Item'

import { useData } from '../context/data'

const List = () => {
    const { allStudents } = useData()
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
                            allStudents.map((student) => (<Item key={student.id} student={student} />))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default List