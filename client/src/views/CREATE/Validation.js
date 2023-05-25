export const validatePokemon = (newPokemon, errors) => {
  const newErrors = { ...errors };

// Validar el nombre del pokemon
if (!newPokemon.name) {
  newErrors.name = 'Please fill in this field';
} else if (!/^[a-zA-Z]+$/.test(newPokemon.name)) {
  newErrors.name = 'Name can only contain letters';
} else {
  newErrors.name = '';
}

  // Validar la vida del pokemon
  if (!newPokemon.life) {
    newErrors.life = 'Please choose a value';
  } else if (newPokemon.life < 1 || newPokemon.life > 150) {
    newErrors.life = 'HP must be between 1 and 150';
  } else {
    newErrors.life = '';
  }

  // Validar el ataque del pokemon
  if (!newPokemon.attack) {
    newErrors.attack = 'Please choose a value';
  } else if (newPokemon.attack < 1 || newPokemon.attack > 250) {
    newErrors.attack = 'Attack must be between 1 and 250';
  } else {
    newErrors.attack = '';
  }

  // Validar la defensa del pokemon
  if (!newPokemon.defense) {
    newErrors.defense = 'Please choose a value';
  } else if (newPokemon.defense < 1 || newPokemon.defense > 250) {
    newErrors.defense = 'Defense must be between 1 and 250';
  } else {
    newErrors.defense = '';
  }

  // Validar el tipo del pokemon
  if (!newPokemon.type || newPokemon.type.length === 0) {
    newErrors.type = 'Please select at least one type';
  } else {
    newErrors.type = '';
  }

  return newErrors;
};
