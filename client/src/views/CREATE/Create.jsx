import axios from 'axios';
import React, { useState } from 'react';
import { validatePokemon } from './Validation';
// import { pokemonImages } from '../../redux/actions';
//import { useDispatch} from "react-redux";
import './Create.css'

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
    { value: 'fairy', label: 'Fairy' }
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

  const [formValid, setFormValid] = useState(false);

  const changeHandler = (event) => {
    const property = event.target.name;
    const value = event.target.value;
  
    if (property === 'type') {
      // Verificar si el tipo ya está presente en la lista
      const typeIndex = newPokemon.type.indexOf(value);
  
      if (typeIndex === -1) {
        // Agregar el tipo a la lista si no está presente
        setNewPokemon((prevPokemon) => ({
          ...prevPokemon,
          type: [...prevPokemon.type, value],
        }));
      } else {
        // Eliminar el tipo de la lista si ya está presente
        setNewPokemon((prevPokemon) => ({
          ...prevPokemon,
          type: prevPokemon.type.filter((type) => type !== value),
        }));
      }
    } else {
      // Actualizar el valor de otros campos
      setNewPokemon((prevPokemon) => ({
        ...prevPokemon,
        [property]: value,
      }));
    }
  
    setErrors(validatePokemon({ ...newPokemon, [property]: value }, setErrors));
    setFormValid(Object.values(errors).every((val) => val === ''));
  };
  

  const submitHandler = (event) => {
    event.preventDefault();
    setFormValid(Object.values(errors).every((val) => val === ''));
    if (formValid) {
      axios
        .post('http://localhost:3001/pokemons', newPokemon)
        .then((res) => {
          console.log(res)
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


  // ESTO ES PARA ELEGIR LA IMAGEN
  // const [selectedImage, setSelectedImage] = useState(null);
  // const dispatch = useDispatch();

  // const handleImageClick = (imageUrl) => {
  //   setSelectedImage(imageUrl);
  // };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   // Aquí puedes enviar la URL de la imagen seleccionada junto con los demás datos del Pokemon al servidor
  // };

  // const loadPokemonImages = async () => {
  //   try {
  //     await dispatch(pokemonImages());
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   loadPokemonImages();
  // }, []);

  //ACA TERMINA LO  DE LA IAMGEN

  return (
    <form onSubmit={submitHandler} className='form'>
      <div>
        <label>Name</label>
        <input type='text' value={newPokemon.name} onChange={changeHandler} name='name' />
        {errors.name && <span>{errors.name}</span>}
      </div>

      <div>
        <label>HP</label>
        <input type='text' value={newPokemon.life} onChange={changeHandler} name='life' />
        {errors.life && <span>{errors.life}</span>}
      </div>

      <div>
        <label>Attack</label>
        <input type='text' value={newPokemon.attack} onChange={changeHandler} name='attack' />
        {errors.attack && <span>{errors.attack}</span>}
      </div>

      <div>
        <label>Defense</label>
        <input type='text' value={newPokemon.defense} onChange={changeHandler} name='defense' />
        {errors.defense && <span>{errors.defense}</span>}
      </div>

      <div>
        <label>Speed</label>
        <input type='text' value={newPokemon.speed} onChange={changeHandler} name='speed' />
        {errors.speed && <span>{errors.speed}</span>}
      </div>

      <div>
       <label>Height</label>
       <input type='text' value={newPokemon.height} onChange={changeHandler} name='height'/>
       {errors.height && <span>{errors.height}</span>}
      </div>

      <div>
       <label>Weight</label>
       <input type='text' value={newPokemon.weight} onChange={changeHandler} name='weight'/>
       {errors.weight && <span>{errors.weight}</span>}     
      </div>

      {/* <div>
  <h3>Select an image:</h3>
  <div>
   {pokemonImages ? pokemonImages.map((imageUrl) => (
      <img
        key={imageUrl}
        src={imageUrl}
        alt="Pokemon"
        onClick={() => handleImageClick(imageUrl)}
        className={selectedImage === imageUrl ? "selected" : ""}
      />
    )) : <p>Loading...</p>}
  </div>
</div> */}
 
 <div>
       <label>IMAGE</label>
       <input type='text' value={newPokemon.image} onChange={changeHandler} name='image'/>
       {errors.image && <span>{errors.image}</span>}     
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



      <button type='submit'>SUBMIT</button>
    </form>
  );
}


export default Create;