import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { validatePokemon } from './Validation';
import './Create.css';
import { getPokemonImages } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { NavBar } from '../../components/index';

const Create = () => {
  const [newPokemon, setNewPokemon] = useState({
    name: '',
    image: '',
    life: '',
    attack: '',
    defense: '',
    speed: '',
    height: '',
    weight: '',
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
  const [formValid, setFormValid] = useState(false);

  const changeHandler = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    //para seleccionar mas de un tipo
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
    } 
    //para otros campos
    else {
      setNewPokemon((prevPokemon) => ({
        ...prevPokemon,
        [property]: value,
      }));
    }
    setErrors((prevErrors) => ({
      ...prevErrors,
      [property]: validatePokemon({ ...newPokemon, [property]: value }, prevErrors)[property],
    }));
  };
  

  const submitHandler = async (event) => {
    event.preventDefault();
    setIsSubmitClicked(true);

    setErrors(validatePokemon(newPokemon, errors));

    if (Object.values(errors).some((val) => val !== '')) {
      return;
    }
    
    const { name, image, life, attack, defense, speed, height, weight, type } = newPokemon
    let pokemon = {name:name, image:image, life:life, attack:attack, defense:defense, type:type}
    if(speed.length)pokemon={...pokemon,speed:speed}
    if(height.length)pokemon={...pokemon,height:height}
    if(weight.length)pokemon={...pokemon,weight:weight}
    if( name.length && image.length && life.length && attack.length && defense.length && type.length){
    axios
      .post('http://localhost:3001/pokemons', pokemon)
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
          type: [],
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
      .catch((err) => {
        if (err.response) {
          const errorMessage = err.response.data.message;
          setErrors((prevErrors) => ({
            ...prevErrors,
            server: errorMessage,
          }));
        } else {
          setErrors((prevErrors) => ({
            ...prevErrors,
            server: 'Failed to create Pokemon',
          }));
        }
      });}
  };

  const dispatch = useDispatch();
  const pokemonImages = useSelector((state) => state.pokemonImages);
  const [selectedImage, setSelectedImage] = useState('');

  useEffect(() => {
    dispatch(getPokemonImages());
  }, [dispatch]);

  const handleImageChange = (event) => {
    setSelectedImage(event.target.value);
    setNewPokemon((pokemon)=>({
      ...pokemon,
      image: event.target.value
    }))
  };

  const renderImages = () => {
    if (pokemonImages.length === 0) {
      return <span>Loading...</span>;
    }
    return pokemonImages.map((imageUrl, index) => (
      <img
        key={index}
        src={imageUrl}
        alt={`Image ${index + 1}`}
        className={selectedImage === imageUrl ? 'selected' : ''}
        onClick={() => setSelectedImage(imageUrl)}
      />
    ));
  };

  useEffect(() => {
    const isValid = Object.values(errors).every((val) => val === '');
    setFormValid(isValid);
  }, [errors]);

  return (
    <div>
      <form onSubmit={submitHandler} className="form">
        <h1>CREATE YOUR POKEMON</h1>
        <div>
          <label>Name *</label>
          <input type="text" value={newPokemon.name} onChange={changeHandler} name="name" />
          {errors.name && <span>{errors.name}</span>}
        </div>
        <div>
          <label>HP *</label>
          <div className="range-container">
            <input
              type="range"
              min="0"
              max="150"
              value={newPokemon.life || '20'}
              onChange={changeHandler}
              name="life"
            />
            <span className="range-value">{newPokemon.life}</span>
          </div>
          {errors.life && <span>{errors.life}</span>}
        </div>
  
      <div>
        <label>Attack *</label>
        <div className="range-container">
          <input type="range" min="0" max="100" value={newPokemon.attack || '20'} onChange={changeHandler} name="attack" />
          <span className="range-value">{newPokemon.attack}</span>
        </div>
        {errors.attack && <span>{errors.attack}</span>}
      </div>
  
      <div>
        <label>Defense *</label>
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
        <label>Type *</label>
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
        <label>Select an Image: *</label>
        <div className="image-container">
          <select onChange={handleImageChange} value={selectedImage}>
            <option value="">Select Image</option>
            {pokemonImages.map((imageUrl, index) => (
              <option key={index} value={imageUrl}>
                 {index + 1}
              </option>
            ))}
          </select>
          {selectedImage && (
            <img src={selectedImage} alt="Selected Pokemon" className="selected-image" />
          )}
        </div>
      </div>
  
      <button type="submit" disabled={!formValid}>
          CREATE POKEMON
        </button>
      </form>
      <NavBar />
    </div>
  );
};

export default Create;
