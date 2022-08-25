import React from 'react';
import RecipiesTableRow from './RecipiesTableRow';

const RecipiesTable = ({ data }) => {
    console.log(data, 20);
    return (
        <div>
            <h3>Recetas filtradas: </h3>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Instucciones</th>
                        <th>Ingredientes</th>
                        <th>País</th>
                    </tr>
                </thead>
                <tbody>
                    {data[0].length > 0 ? (
                        data[0].map(el =>
                            <RecipiesTableRow
                                key={el.id}
                                el={el}
                               />)
                    ) : (
                        <tr>
                            <td colSpan="4">Sin datos</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default RecipiesTable;