// export const validateName = (pokemon, error, setError) => {
//     if (!pokemon.name) setError('Please fill in this field')
//     else {
//         if(!isNaN(pokemon.name))setError('Cannot be a number');
//         else{
//             if (!/^[a-zA-Z0-9]+$/.test(pokemon.name))setError('Cannot contain special characters');
//             else setError('');
//         }
//     }
// };

// export const validateImage = (pokemon, error, setError) => {
//     if (!pokemon.image) setError('Please fill in this field');
//     else {
//         if(!isNaN(pokemon.image))setError('Cannot be a number');
//         else{
//             if (!/^[a-zA-Z0-9_.\-/]+$/.test(pokemon.image))setError('Cannot contain special characters');
//             else setError('');
//         }
//     }
// };

// export const validateLife = (pokemon, error, setError) => {
//     if (!pokemon.life) setError('Please fill in this field')
//     else {
//         if(isNaN(pokemon.life))setError('Must contain only numbers');
//         else setError('');
//     }
// };

// export const validateAttack = (pokemon, error, setError) => { 
//     if (!pokemon.attack) setError('Please fill in this field')
//     else {
//         if(isNaN(pokemon.attack))setError('Must contain only numbers');
//         else setError('');
//     }
// };

// export const validateDefense = (pokemon, error, setError) => {
//     if (!pokemon.defense) setError('Please fill in this field')
//     else {
//         if(isNaN(pokemon.defense))setError('Must contain only numbers');
//         else setError('');
//     }
// };

// export const validateSpeed = (pokemon, error, setError) => {
//     if(isNaN(pokemon.speed))setError('Must contain only numbers');
//     else setError('');
// };

// export const validateHeight = (pokemon, error, setError) => {
//     if(isNaN(pokemon.height))setError('Must contain only numbers');
//     else setError('');
// };

// export const validateWeight = (pokemon, error, setError) => {
//     if(isNaN(pokemon.weight))setError('Must contain only numbers');
//     else setError('');
// };

// export const validateType = (pokemon, error, setError) => {
//     if (!pokemon.type) setError('Please fill in this field')
//     else setError('') 
// };


export const validatePokemon = (pokemon, error, setError) => {
    // Validar el nombre del pokemon
    if (!pokemon.name) {
      setError('Please fill in this field');
    } else if (!/^[a-zA-Z0-9]+$/.test(pokemon.name)) {
      setError('Name cannot contain special characters');
    } else if (isNaN(pokemon.name)) {
      setError('Name cannot be a number');
    } else {
      setError('');
    }
  
    // Validar la imagen del pokemon
    if (!pokemon.image) {
      setError('Please fill in this field');
    } else if (!/^[a-zA-Z0-9_.\-/]+$/.test(pokemon.image)) {
      setError('Image cannot contain special characters');
    } else if (isNaN(pokemon.image)) {
      setError('Image cannot be a number');
    } else {
      setError('');
    }
  
    // Validar la vida del pokemon
    if (!pokemon.life) {
      setError('Please fill in this field');
    } else if (isNaN(pokemon.life)) {
      setError('Life must contain only numbers');
    } else {
      setError('');
    }
  
    // Validar el ataque del pokemon
    if (!pokemon.attack) {
      setError('Please fill in this field');
    } else if (isNaN(pokemon.attack)) {
      setError('Attack must contain only numbers');
    } else {
      setError('');
    }
  
    // Validar la defensa del pokemon
    if (!pokemon.defense) {
      setError('Please fill in this field');
    } else if (isNaN(pokemon.defense)) {
      setError('Defense must contain only numbers');
    } else {
      setError('');
    }
  
    // Validar la velocidad del pokemon
    if (!pokemon.speed) {
      setError('Please fill in this field');
    } else if (isNaN(pokemon.speed)) {
      setError('Speed must contain only numbers');
    } else {
      setError('');
    }
  
    // Validar la altura del pokemon
    if (!pokemon.height) {
      setError('Please fill in this field');
    } else if (isNaN(pokemon.height)) {
      setError('Height must contain only numbers');
    } else {
      setError('');
    }
  
    // Validar el peso del pokemon
    if (!pokemon.weight) {
      setError('Please fill in this field');
    } else if (isNaN(pokemon.weight)) {
      setError('Weight must contain only numbers');
    } else {
      setError('');
    }
  
    // Validar el tipo del pokemon
    if (!pokemon.type) {
      setError('Please fill in this field');
    } else {
      setError('');
    }
  };
  
