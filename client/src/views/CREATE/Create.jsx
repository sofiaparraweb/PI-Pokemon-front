import axios from 'axios';
import React, { useState } from 'react';

const Form = () => {
 
 const [form, setForm] = useState({
  name: '',
  hp: '',
  attack: '',
  defense: '',
  speed: '',
  height: '',
  weight: '',
 })
 
 const [errors, setErrors] = useState({
  name: '',
  hp: '',
  attack: '',
  defense: '',
  speed: '',
  height: '',
  weight: '',
 })

const changeHandler = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    // validate({ ...form, [property]:value})
    setForm({ ...form, [property]:value})
}

const submitHandler = (event) => {
  event.preventDefault()
  axios.post('http://localhost:3001/pokemons', form)
  .then(res=>alert(res))
  .catch(err=>alert(err))
}

  return (
    <form onSubmit={submitHandler}>
<div>
  <label>Name</label>
  <input type='text' value={form.name} onChange={changeHandler} name='name'/>
  <span></span>
</div>

<div>
  <label>HP(life)</label>
  <input type='text' value={form.hp} onChange={changeHandler} name='hp'/>
</div>

<div>
  <label>Attack</label>
  <input type='text' value={form.attack} onChange={changeHandler} name='attack'/>
</div>

<div>
  <label>Defense</label>
  <input type='text' value={form.defense} onChange={changeHandler} name='defense'/>
</div>

<div>
  <label>Speed</label>
  <input type='text' value={form.speed} onChange={changeHandler} name='speed'/>
</div>

<div>
  <label>Height</label>
  <input type='text' value={form.height} onChange={changeHandler} name='height'/>
</div>

<div>
  <label>Weight</label>
  <input type='text' value={form.weight} onChange={changeHandler} name='weight'/>
</div>

<div>
  <label>Type</label>
  <input type='text' value={form.type} onChange={changeHandler} name='type'/>
</div>

<button type='submit'>SUBMIT</button>
    </form>
  );
}

export default Form;