export const validatePokemon = (newPokemon, errors) => {
  const newErrors = { ...errors };

  // Validar el nombre del pokemon
  if (!newPokemon.name) {
    newErrors.name = 'Please fill in this field';
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

  // Validar la velocidad del pokemon
  if (newPokemon.speed !== '') {
    if (newPokemon.speed < 1 || newPokemon.speed > 250) {
      newErrors.speed = 'Speed must be between 1 and 250';
    } else {
      newErrors.speed = '';
    }
  } else {
    newErrors.speed = '';
  }

  // Validar la altura del pokemon
  if (newPokemon.height !== '') {
    if (newPokemon.height < 1 || newPokemon.height > 100) {
      newErrors.height = 'Height must be between 1 and 100';
    } else {
      newErrors.height = '';
    }
  } else {
    newErrors.height = '';
  }

  // Validar el peso del pokemon
  if (newPokemon.weight !== '') {
    if (newPokemon.weight < 1 || newPokemon.weight > 100) {
      newErrors.weight = 'Weight must be between 1 and 100';
    } else {
      newErrors.weight = '';
    }
  } else {
    newErrors.weight = '';
  }

  // Validar el tipo del pokemon
  if (!newPokemon.type || newPokemon.type.length === 0) {
    newErrors.type = 'Please select at least one type';
  } else {
    newErrors.type = '';
  }

  return newErrors;
};
