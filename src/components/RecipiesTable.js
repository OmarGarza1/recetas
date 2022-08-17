import React from 'react';
import RecipiesTableRow from './RecipiesTableRow';

const RecipiesTable = ({ data, setDataToEdit, deleteData }) => {
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
                    {data.length > 0 ? (
                        data.map(el =>
                            <RecipiesTableRow
                                key={el.id}
                                el={el}
                                setDataToEdit={setDataToEdit}
                                deleteData={deleteData} />)
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