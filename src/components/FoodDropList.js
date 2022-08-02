import React, { Component } from "react";
import FoodFilter from "./FoodFilter";


const options = [
  {
    id: 1,
    name: "Cebolla",
    status: ""
  },
  {
    id: 2,
    name: "Huevo",
    status: ""
  },
  {
    id: 3,
    name: "Queso",
    status: ""
  },
  {
    id: 4 ,
    name: "Pan",
    status: ""
  }
];

export default class FoodDropList extends Component {

    state = {
      ingredient: "banana",
    };

    
  handleChange = (e) => {
    console.log(e.target.value +  " Selected!!");
    this.setState({ ingredient: e.target.value });
  }

  render() {
    return (
      <div id="App">
        <div className="select-container">
          <select value={this.state.ingredient} onChange={this.handleChange}>
            {options.map((option) => (
              <option key={option.id} value={option.name}>{option.name}</option>
            ))}
          </select>
          <FoodFilter ingredient={this.state.ingredient} />
        </div>
      </div>
    );

  }
}
