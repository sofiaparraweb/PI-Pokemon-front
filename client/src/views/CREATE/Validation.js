export const validatePokemon = (newPokemon, errors) => {
  const newErrors = { ...errors };

  // Validar el nombre del pokemon
if (!newPokemon.name) {
  newErrors.name = 'Please fill in this field';
} else if (!/^[a-zA-Z0-9]+$/.test(newPokemon.name)) {
  newErrors.name = 'Name cannot contain special characters';
} else if (!/^\D+$/.test(newPokemon.name)) {
  newErrors.name = 'Name cannot contain a number';
} else {
  newErrors.name = '';
}

// Validar la vida del pokemon
if (!newPokemon.life) {
  newErrors.life = 'Please fill in this field';
} else if (!/^[0-9]+$/.test(newPokemon.life)) {
  newErrors.life = 'HP must contain only numbers';
} else if (/^[^0-9]+$/.test(newPokemon.life)) {
  newErrors.life = 'HP must contain only numbers';
} else if (newPokemon.life < 1 || newPokemon.life > 150) {
  newErrors.life = 'HP must be between 1 and 150';
} else {
  newErrors.life = '';
}


// Validar el ataque del pokemon
if (!newPokemon.attack) {
  newErrors.attack = 'Please fill in this field';
} else if (!/^\d+$/.test(newPokemon.attack)) {
  newErrors.attack = 'Attack must contain only numbers';
} else if (newPokemon.attack < 1 || newPokemon.attack > 250) {
  newErrors.attack = 'Attack must be between 1 and 250';
} else {
  newErrors.attack = '';
}

// Validar la defensa del pokemon
if (!newPokemon.defense) {
  newErrors.defense = 'Please fill in this field';
} else if (!/^\d+$/.test(newPokemon.defense)) {
  newErrors.defense = 'Defense must contain only numbers';
} else if (newPokemon.defense < 1 || newPokemon.defense > 250) {
  newErrors.defense = 'Defense must be between 1 and 250';
} else {
  newErrors.defense = '';
}

// Validar la velocidad del pokemon
if (!newPokemon.speed) {
  newErrors.speed = 'Please fill in this field';
} else if (!/^\d+$/.test(newPokemon.speed)) {
  newErrors.speed = 'Speed must contain only numbers';
} else if (newPokemon.speed < 1 || newPokemon.speed > 250) {
  newErrors.speed = 'Speed must be between 1 and 250';
} else {
  newErrors.speed = '';
}

// Validar la altura del pokemon
if (!newPokemon.height) {
  newErrors.height = 'Please fill in this field';
} else if (!/^\d+$/.test(newPokemon.height)) {
  newErrors.height = 'Height must contain only numbers';
} else if (newPokemon.height < 1 || newPokemon.height > 100) {
  newErrors.height = 'Height must be between 1 and 100';
} else {
  newErrors.height = '';
}

// Validar el peso del pokemon
if (!newPokemon.weight) {
  newErrors.weight = 'Please fill in this field';
} else if (!/^\d+$/.test(newPokemon.weight)) {
  newErrors.weight = 'Weight must contain only numbers';
} else if (newPokemon.weight < 1 || newPokemon.weight > 100) {
  newErrors.weight = 'Weight must be between 1 and 100';
} else {
  newErrors.weight = '';
}


//   // Validar el tipo del pokemon
// if (!newPokemon.type) {
//   newErrors.type = 'Please select a type';
// } else if (!types.some((type) => type.value === newPokemon.type)) {
//   newErrors.type = 'Invalid type';
// } else {
//   newErrors.type = '';
// }

  return newErrors;
};
