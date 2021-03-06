
import React from "react";
import './Home.css';

//import {Container, Button, Form} from 'react-bootstrap';

//import Amplify from "aws-amplify";
//import { API } from 'aws-amplify';

//import awsExports from "./aws-exports";
//Amplify.configure(awsExports);


var user = {email: "123@gmail.com", mostCommonRecipes: [1,2], numRecipesCompleted: 4, password: "dummypassword3",
            recipesCompleted: [1,1,2,2], userID: 3, username: "111"}
var recipes = [{
                estimatedTime: 600,
                name: "Simple Arabica Pour-over",
                numSteps: 11,
                rating: 4.5,
                recipeID: 0,
                steps: [ { description: "Measure your brew ratio (1:17 coffee:water)", stepType: "action", targetValue: 60  }], 
                brewer: "Chemex",
                species: "Arabica",
                origin: "",
                roasts: "dark"
              },
              {
                estimatedTime: 600,
                name: "Simple Arabica Pour-over",
                numSteps: 11,
                rating: 4.5,
                recipeID: 0,
                steps: [ { description: "Measure your brew ratio (1:17 coffee:water)", stepType: "action", targetValue: 60  }], 
                brewer: "",
                species: "",
                origin: "",
                roasts: ""
              },
              {
                estimatedTime: 600,
                name: "Simple Arabica Pour-over",
                numSteps: 11,
                rating: 4.5,
                recipeID: 0,
                steps: [ { description: "Measure your brew ratio (1:17 coffee:water)", stepType: "action", targetValue: 60  }], 
                brewer: "",
                species: "",
                origin: "",
                roasts: ""
              }
            ]

function Home() {

  //const myInit = {};
/*
API.get(apiName, path, myInit)
  .then(response => {
    return response.json();
  }).then(data => {console.log(data); user = data;})
  .catch(error => {
    console.log(error.response);
 });

API.get(apiName, path, myInit)
  .then(response => {
    return response.json();
  }).then(data => {console.log(data); recipes = data;})
  .catch(error => {
    console.log(error.response);
 });

*/

  return (
    <><div class="User">
      <div class="d-flex flex-column text-center p-3 py-5">
        <span class="field">Name</span>
        <span class="value">{user.username}</span>
        <span class="field">Email</span>
        <span class="value">{user.email}</span>
        <span class="field"># of Recipes Completed</span>
        <span class="value">{user.numRecipesCompleted}</span>
      </div>
    </div>
    
    <div class = "tables">
     <div class = "mostCommonRecipes">
      <h3 class ="header">Your Favorite Recipes</h3>
        <table>
                 <tr>
                  <th style={{fontSize: '20px'}}>Name&nbsp;&nbsp;&nbsp;</th>
                  <th style={{fontSize: '20px'}}># of Steps&nbsp;&nbsp;&nbsp;</th>
                  <th style={{fontSize: '20px'}}>Time&nbsp;&nbsp;&nbsp;</th>
                  <th style={{fontSize: '20px'}}>Rating&nbsp;&nbsp;&nbsp;</th>
                  <th style={{fontSize: '20px'}}>Brewer&nbsp;&nbsp;&nbsp;</th>
                  <th style={{fontSize: '20px'}}>Species&nbsp;&nbsp;&nbsp;</th>
                  <th style={{fontSize: '20px'}}>Origin&nbsp;&nbsp;&nbsp;</th>
                  <th style={{fontSize: '20px'}}>Roasts</th>
                 </tr>
          {recipes.map(r => (
                <tr>
                 <td style={{fontSize: '15px'}}>{r.name}</td>
                 <td style={{fontSize: '15px'}}>{r.numSteps}</td>
                 <td style={{fontSize: '15px'}}>{r.estimatedTime}</td>
                 <td style={{fontSize: '15px'}}>{r.rating}</td>
                 <td style={{fontSize: '15px'}}>{r.brewer}</td>
                 <td style={{fontSize: '15px'}}>{r.species}</td>
                 <td style={{fontSize: '15px'}}>{r.origin}</td>
                 <td style={{fontSize: '15px'}}>{r.roasts}</td>
                </tr>
           ) )}
        </table>
       </div>
      
       <div class = "recipesCompleted">
        <h3 id="h" class ="header">Recipes Completed</h3>
          <table>
                 <tr>
                  <th style={{fontSize: '20px'}}>Name&nbsp;</th>
                  <th style={{fontSize: '20px'}}>Rating</th>
                 </tr>
          {recipes.map(r => (
                <tr>
                 <td style={{fontSize: '15px'}}>{r.name}</td>
                 <td style={{fontSize: '15px'}}>{r.rating}</td>
                </tr>
           ) )}
        </table>
       </div>
    </div>
  </>
    
);
}

          export default Home;

