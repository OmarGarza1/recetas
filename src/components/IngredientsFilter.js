import { useState } from 'react';
import IngredientsList from './IngredientsList';
import FoodDropList from "./FoodDropList"

const IngredientsFilter = () => {
    const [ingredients, setIngredients] = useState([
        { id: 1, name: 'Cebolla' },
        { id: 2, name: 'Huevo' },
        { id: 3, name: 'Pan' },
        { id: 4, name: 'Pollo' }
    ]);

    const [ingredientsList, setIngredientsList] = useState([{}]);

    const addEmployee = (id, name) => {
        setIngredients([
            ...ingredients,
            { id: this.id, name: this.name },
        ]);
    };
    

    return (
        <>
         <FoodDropList ingredients={ingredients}/>
         <IngredientsList ingredients={ingredients} />
        </>
    )

}

export default IngredientsFilter;