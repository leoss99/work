import './Add.css';
import React from "react";
import {Container, Button, Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
/*
import Amplify from "aws-amplify";
import { API } from 'aws-amplify';

import awsExports from "./aws-exports";
Amplify.configure(awsExports);
*/
async function addRecipe(event) {                           //send the data to API
  event.preventDefault();
  const data = {
    body: {
      name: formState.name,
      action: formState.action,
      time: formState.time,
      brewer: formState.brewer,
      species: formState.species,
      origin: formState.origin,
      roasts: formState.roasts
    }
  };

  console.log(data);
  
  //const response = await API.get('formapi', 'path + "/"+ currentUser' );   //how to get current user?
  //const user = await response.json();
  //const apiData = await API.post('formapi', 'path + "/" + user.id + "/" + "recipeList"', JSON.stringify(data.body));       //?
  //console.log({ apiData });
  alert('Recipe Submitted');
}

const formState = { name: '', action: '', time: '', brewer: '', species: '', origin: '', roasts: ''}       
function updateFormState(key, value) {                              //update form state
    formState[key] = value;
  }

function Add() {
  return (
    <Container>
    <div class = "all">
      <h3>Customize Your Recipe</h3>
      <br/>
        <Form>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control placeholder="Name" onChange={e => updateFormState('name', e.target.value)} />
          </Form.Group><br/>
          <Form.Group>
            <Form.Label>Action</Form.Label>
            <Form.Control placeholder="action" onChange={e => updateFormState('action', e.target.value)} />
          </Form.Group><br/>
          <Form.Group>
            <Form.Label>Time</Form.Label>
            <Form.Control placeholder="time" onChange={e => updateFormState('time', e.target.value)} />
          </Form.Group><br/>

      <div className='Dropdown'>
      <Form.Group>
      <Form.Label>Brewer&nbsp;&nbsp;</Form.Label>
      <select id="Brewer"   onChange={e => updateFormState('brewer', e.target.value)}>
        <option value="V60">V60</option>
        <option value="AeroPress">AeroPress</option>
        <option value="Chemex">Chemex</option>
        <option value="Moka Pot">Moka Pot</option>
        <option value="French Press">French Press</option>
        <option value="Espresso">Espresso</option>
      </select>
      </Form.Group><br/>

      <Form.Group>
      <Form.Label>Species&nbsp;&nbsp;</Form.Label>
      <select id="Species"   onChange={e => updateFormState('species', e.target.value)}>
        <option value="Arabica">Arabica</option>
        <option value="Robusta">Robusta</option>
        <option value="Liberica">Liberica</option>
        <option value="Excelsa">Excelsa</option>
      </select>
      </Form.Group><br/>

      <Form.Group>
      <Form.Label>Origins&nbsp;&nbsp;</Form.Label>
      <select id="Origins"   onChange={e => updateFormState('origin', e.target.value)}>
        <option value="Colombia">Colombia</option>
        <option value="Brazil">Brazil</option>
        <option value="Ecuador">Ecuador</option>
        <option value="Honduras">Honduras</option>
      </select>
      </Form.Group><br/>

      <Form.Group>
      <Form.Label>Roasts&nbsp;&nbsp;</Form.Label>
      <select id="Roasts"   onChange={e => updateFormState('roasts', e.target.value)}>
        <option value="Light">Light</option> 
        <option value="Medium">Medium</option>
        <option value="Dark">Dark</option>
        <option value="Extra Dark">Extra Dark</option>
      </select>
      </Form.Group><br/>
       </div>

       <Button onClick={e => addRecipe(e)}>Submit</Button>
      </Form>
    </div>
   </Container>
  );
}

export default Add;