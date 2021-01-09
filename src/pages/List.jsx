import React from 'react'

import Item from '../components/Item'

import { useData } from '../context/data'

const List = () => {
    const { allProfils } = useData()
    return(
        <div className="container">
            <div>
                <table className="striped">
                    <thead className="blue">
                        <tr className="white-text">
                            <th>ID</th>
                            <th className="center">Nom</th>
                            <th className="center">Prenom</th>
                            <th className="center">Mail</th>
                            <th className="center">Specialité</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allProfils.map((profil) => (<Item key={profil.id} profil={profil} />))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default List