import React from 'react';

const RecipiesTableRow = ({ el }) => {
    let { id, name, instructions, ingredients, country } = el;

    console.log(el, 100);

    return (

        <tr key={id}>
            <td>{name}</td>
            <td>{instructions}</td>
            <td>
                {
                    ingredients.map(element =>
                        <p key={element}>{element}</p>
                    
                    )}

            </td>
            <td>{country}</td>
        </tr>

    );
}

export default RecipiesTableRow;