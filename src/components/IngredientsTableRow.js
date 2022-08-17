import React from 'react';

const IngredientsTableRow = ({el, setDataToEdit, deleteData}) => {
    let {name,  id } = el;
    return (

            <tr>
                <td>{name}</td>
                <td>
                    <button onClick={() => {setDataToEdit(el)}}>Editar</button>
                    <button onClick={() => {deleteData(id, name)}}>Eliminar</button>
                </td>
            </tr>

    );
}

export default IngredientsTableRow;