import React from "react";
import './Explore.css';
/*
import {Container, Button, Form} from 'react-bootstrap';

import Amplify from "aws-amplify";
import { API } from 'aws-amplify';

import awsExports from "./aws-exports";
Amplify.configure(awsExports);
*/

//var user ={name:'', email:'adf', serialNumber:'', rlist:[]};
var recipes = [{name:'123', action:'pour', time:'', brewer:'', species:'', origin:'', roasts:'' }];
//const myInit = {};
/*
API.get(apiName, path, myInit)
  .then(response => {
    return response.json();
  }).then(data => {console.log(data); user = data;  recipes = user.rlist;})       //??
  .catch(error => {
    console.log(error.response);
 });
*/

async function addRecipe(r) {                           //send the data to API
  const data = {
    body: {
      name: r.name,
      action: r.action,
      time: r.time,
      brewer: r.brewer,
      species: r.species,
      origin: r.origin,
      roasts: r.roasts
    }
  };
  console.log(data);
  //const response = await API.get('formapi', 'path + "/"+ currentUser' );   //how to get current user?
  //const user = await response.json();
  //const apiData = await API.post('formapi', 'path + "/" + user.id + "/" + "recipeList"', JSON.stringify(data.body));       //?
}

function Explore() {
  return (
  <div class="container rounded bg-white mt-5 mb-5">
    <div class="row">
        <div class="col-md-8 ">
            <div class="p-3 py-8">
                <div class="d-flex justify-content-between align-items-center mb-3">
                    <header>All Recipes</header>
                </div>
                <div class="row mt-3">
                <table>
                 <tr>
                  <th>Name</th>
                  <th width="30%">Action</th>
                  <th>Time</th>
                  <th>Brewer</th>
                  <th>Species</th>
                  <th>Origin</th>
                  <th>Roasts</th>
                 </tr>
          {recipes.map(r => (
                <tr>
                 <td><input type="submit" class="button" value="Add another line" onclick={r => addRecipe(r)} /></td>
                 <td>{r.name}</td>
                 <td>{r.action}</td>
                 <td>{r.time}</td>
                 <td>{r.brewer}</td>
                 <td>{r.species}</td>
                 <td>{r.origin}</td>
                 <td>{r.roasts}</td>

                </tr>
           ) )}
         </table>
                
                </div>
            </div>
        </div>
   </div>
  </div>

  );
}

export default Explore;