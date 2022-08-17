import React from 'react';

const RecipiesTableRow = ({el}) => {
    let {id, name,  instructions, ingredients, country} = el;
    return (

            <tr key={id}>
                <td>{name}</td>
                <td>{instructions}</td>
                <td>
                    {
                    ingredients.map(element => 
                        <p>{element}</p>
                    )}
                    </td>
                <td>{country}</td>
            </tr>

    );
}

export default RecipiesTableRow;