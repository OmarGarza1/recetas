import React,{Component} from "react";
import data from "../helpers/data.json";
import FoodInformation from "./FoodInformation"


export default class RecipiesTable extends Component   {
   
    render(){
            var heading = ['Name', 'Instructions', 'Ingridients'];

            var body = data;

            return (
                <div >
                    <FoodInformation heading={heading} body={body} />
                </div>
            );
    }
}


