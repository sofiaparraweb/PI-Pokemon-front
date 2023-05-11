import axios from 'axios';
import React, { useState } from 'react';
// import { validateName, validateAttack, validateDefense, validateHeight, validateImage, validateLife, validateSpeed, validateType, validateWeight } from './Validation';
import { validatePokemon } from './Validation';
const Create = () => {

 const [newPokemon, setNewPokemon] = useState({
  name: '',
  hp: '',
  attack: '',
  defense: '',
  speed: '',
  height: '',
  weight: '',
  type: [],
 })
 
 const [errors, setErrors] = useState({
  name: '',
  hp: '',
  attack: '',
  defense: '',
  speed: '',
  height: '',
  weight: '',
  type: [],
 })

const changeHandler = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setNewPokemon({ ...newPokemon, [property]:value})
//     validateName({...newPokemon, [property]:value}, errors, setErrors)
//     validateAttack({...newPokemon, [property]:value}, errors, setErrors)
//     validateDefense({...newPokemon, [property]:value}, errors, setErrors)
//     validateHeight({...newPokemon, [property]:value}, errors, setErrors)
//     validateImage({...newPokemon, [property]:value}, errors, setErrors)
//     validateLife({...newPokemon, [property]:value}, errors, setErrors)
//     validateSpeed({...newPokemon, [property]:value}, errors, setErrors)
//     validateWeight({...newPokemon, [property]:value}, errors, setErrors)
//     validateType({...newPokemon, [property]:value}, errors, setErrors)
//
    setErrors(validatePokemon(property, value, newPokemon, errors)); 
}

const submitHandler = (event) => {
  event.preventDefault()
  if (
    newPokemon.name &&
    newPokemon.image &&
    newPokemon.life &&
    newPokemon.attack &&
    newPokemon.defense &&
    newPokemon.type.length > 0
  ) { 
    axios.post('http://localhost:3001/pokemons', newPokemon)
      .then(res => alert(res))
      .catch(err => alert(err))
  }
};

  return (
    <form onSubmit={submitHandler}>
<div>
  <label>Name</label>
  <input type='text' value={newPokemon.name} onChange={changeHandler} name='name'/>
  <span></span>
</div>

<div>
  <label>HP(life)</label>
  <input type='text' value={newPokemon.hp} onChange={changeHandler} name='hp'/>
</div>

<div>
  <label>Attack</label>
  <input type='text' value={newPokemon.attack} onChange={changeHandler} name='attack'/>
</div>

<div>
  <label>Defense</label>
  <input type='text' value={newPokemon.defense} onChange={changeHandler} name='defense'/>
</div>

<div>
  <label>Speed</label>
  <input type='text' value={newPokemon.speed} onChange={changeHandler} name='speed'/>
</div>

<div>
  <label>Height</label>
  <input type='text' value={newPokemon.height} onChange={changeHandler} name='height'/>
</div>

<div>
  <label>Weight</label>
  <input type='text' value={newPokemon.weight} onChange={changeHandler} name='weight'/>
</div>

<div>
  <label>Type</label>
  <input type='text' value={newPokemon.type} onChange={changeHandler} name='type'/>
</div>

<button type='submit'>SUBMIT</button>
    </form>
  );
}

export default Create;