import React,{Component} from "react";
//import './FoodDropList.css';

class  FoodDropList extends Component {

  render (){
   return(
      <div className="container" id="FoodDropList">
        
        <select id = "myList" /*onchange = "addIngredient()" */>  
          <option> ---Choose tutorial--- </option>  
          <option> Cebolla </option>  
          <option> Pan </option>  
          <option> Tortillas </option>  
          <option> Queso </option>  
        </select>  

      </div>
   );
  }

}

export default FoodDropList;
