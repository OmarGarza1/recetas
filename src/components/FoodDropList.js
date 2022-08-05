
export default function FoodDropList(props)  {
    return (
      <div id="App">
        <div className="select-container">
          <select  >
            {props.ingredients.map((option) => (
              <option key={option.id} value={option.name}>{option.name}</option>
            ))}
          </select>
        </div>
      </div>
    );

  
}
