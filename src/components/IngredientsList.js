const IngredientsList = ({ ingredients }) => {

    return (
        <>
            <table className='table'>               
                <tbody>
                    {ingredients.map(option => {
                        return (
                            <tr key={option.id}>
                                <td key={option.id}>{option.name} <button>x</button></td>
                            </tr>
                        )
                    })
                    }
                </tbody>
            </table><br /><br />
        </>
    )
}

export default IngredientsList;