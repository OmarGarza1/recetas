import React,{Component} from "react";


export default class FoodInformation extends Component {
   
     render() {
         var heading = this.props.heading;
         var data = this.props.body;
         return (
             <table style={{ width: 500 }}>
                 <thead>
                     <tr>
                         {heading.map((head, index) => <th key={index}>{head}</th>)}
                     </tr>
                 </thead>
                 <tbody>
                 {data.Recipies.map((item, i) => (
                    <tr key={item.id}>
                        <td>{item.name}</td>
                        <td>{item.instructions}</td>
                        <td>{item.ingredients}</td>
                    </tr>
                 ))}
                 </tbody>
             </table>
         );
     }
 }