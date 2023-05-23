import axios from 'axios';
import React, { useState } from 'react';
import { validatePokemon } from './Validation';
import './Create.css';

const Create = () => {
  const [newPokemon, setNewPokemon] = useState({
    name: '',
    image: '',
    life: '',
    attack: '',
    defense: '',
    speed: '20',
    height: '20',
    weight: '20',
    type: [],
  });
  
  const types = [
    { value: '', label: 'Select a type' },
    { value: 'normal', label: 'Normal' },
    { value: 'fire', label: 'Fire' },
    { value: 'water', label: 'Water' },
    { value: 'electric', label: 'Electric' },
    { value: 'grass', label: 'Grass' },
    { value: 'ice', label: 'Ice' },
    { value: 'fighting', label: 'Fighting' },
    { value: 'poison', label: 'Poison' },
    { value: 'ground', label: 'Ground' },
    { value: 'flying', label: 'Flying' },
    { value: 'psychic', label: 'Psychic' },
    { value: 'bug', label: 'Bug' },
    { value: 'rock', label: 'Rock' },
    { value: 'ghost', label: 'Ghost' },
    { value: 'dragon', label: 'Dragon' },
    { value: 'dark', label: 'Dark' },
    { value: 'steel', label: 'Steel' },
    { value: 'fairy', label: 'Fairy' },
  ];

  const [errors, setErrors] = useState({
    name: '',
    image: '',
    life: '',
    attack: '',
    defense: '',
    speed: '',
    height: '',
    weight: '',
    type: '',
  });

  const [isSubmitClicked, setIsSubmitClicked] = useState(false);

  const changeHandler = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    if (property === 'type') {
      const typeIndex = newPokemon.type.indexOf(value);

      if (typeIndex === -1) {
        setNewPokemon((prevPokemon) => ({
          ...prevPokemon,
          type: [...prevPokemon.type, value],
        }));
      } else {
        setNewPokemon((prevPokemon) => ({
          ...prevPokemon,
          type: prevPokemon.type.filter((type) => type !== value),
        }));
      }
    } else {
      setNewPokemon((prevPokemon) => ({
        ...prevPokemon,
        [property]: value,
      }));
    }

    setErrors(validatePokemon({ ...newPokemon, [property]: value }, errors, isSubmitClicked));
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setIsSubmitClicked(true);

    setErrors(validatePokemon(newPokemon, errors, true));

    const formValid = Object.values(errors).every((val) => val === '');
    if (formValid) {
      axios
        .post('http://localhost:3001/pokemons', newPokemon)
        .then((res) => {
          console.log(res);
          alert(res.data);
          setNewPokemon({
            name: '',
            image: '',
            life: '',
            attack: '',
            defense: '',
            speed: '',
            height: '',
            weight: '',
            type: '',
          });
          setErrors({
            name: '',
            image: '',
            life: '',
            attack: '',
            defense: '',
            speed: '',
            height: '',
            weight: '',
            type: '',
          });
        })
        .catch((err) => alert(err));
    } else {
      alert('Please fill out all required fields before submitting the form.');
    }
  };
  
  
  return (
    <form onSubmit={submitHandler} className="form">
      <h1>CREATE YOUR POKEMON</h1>
      <div>
        <label>Name</label>
        <input type="text" value={newPokemon.name} onChange={changeHandler} name="name" />
        {isSubmitClicked && errors.name && <span>{errors.name}</span>}
      </div>
      <div>
        <label>HP</label>
        <div className="range-container">
          <input type="range" min="0" max="150" value={newPokemon.life || '20'} onChange={changeHandler} name="life" />
          <span className="range-value">{newPokemon.life}</span>
        </div>
        {errors.life && <span>{errors.life}</span>}
      </div>
  
      <div>
        <label>Attack</label>
        <div className="range-container">
          <input type="range" min="0" max="100" value={newPokemon.attack || '20'} onChange={changeHandler} name="attack" />
          <span className="range-value">{newPokemon.attack}</span>
        </div>
        {errors.attack && <span>{errors.attack}</span>}
      </div>
  
      <div>
        <label>Defense</label>
        <div className="range-container">
          <input type="range" min="0" max="100" value={newPokemon.defense || '20'} onChange={changeHandler} name="defense" />
          <span className="range-value">{newPokemon.defense}</span>
        </div>
        {errors.defense && <span>{errors.defense}</span>}
      </div>
  
      <div>
        <label>Speed</label>
        <div className="range-container">
          <input type="range" min="0" max="100"  value={newPokemon.speed || '20'} onChange={changeHandler} name="speed" />
          <span className="range-value">{newPokemon.speed}</span>
        </div>
        {errors.speed && <span>{errors.speed}</span>}
      </div>
  
      <div>
        <label>Height</label>
        <div className="range-container">
          <input type="range" min="0" max="100" value={newPokemon.height || '20'} onChange={changeHandler} name="height" />
          <span className="range-value">{newPokemon.height}</span>
        </div>
        {errors.height && <span>{errors.height}</span>}
      </div>
  
      <div>
        <label>Weight</label>
        <div className="range-container">
          <input type="range" min="0" max="100" value={newPokemon.weight || '20'} onChange={changeHandler} name="weight" />
          <span className="range-value">{newPokemon.weight}</span>
        </div>
        {errors.weight && <span>{errors.weight}</span>}
      </div>
  
      <div className="type-select-container">
        <label>Type</label>
        <select value={newPokemon.type} onChange={changeHandler} name="type" multiple>
          {types.map((type) => (
            <option key={type.value} value={type.value}>
              {type.label}
            </option>
          ))}
        </select>
        {errors.type && <span>{errors.type}</span>}
      </div>
      
      <div>
        <label>IMAGE</label>
        <input type="text" value={newPokemon.image} onChange={changeHandler} name="image" />
        {errors.image && <span>{errors.image}</span>}
      </div>
  
      <button type="submit">CREATE POKEMON</button>
    </form>
  );
          }

export default Create;

