import React from 'react';
import IngredientsTableRow from './IngredientsTableRow';

const IngredientsTable = ({ data, setDataToEdit, deleteData }) => {
    return (
        <div>
            <h3>Ingredientes filtrados: </h3>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {data.length > 0 ? (
                        data.map(el =>
                            <IngredientsTableRow
                                key={el.id}
                                el={el}
                                setDataToEdit={setDataToEdit}
                                deleteData={deleteData} />)
                    ) : (
                        <tr>
                            <td colSpan="2">Sin datos</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default IngredientsTable;