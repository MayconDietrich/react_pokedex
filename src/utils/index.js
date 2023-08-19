const colours = {
  normal: '#A8A77A',
  fire: '#EE8130',
  water: '#6390F0',
  electric: '#F7D02C',
  grass: '#7AC74C',
  ice: '#96D9D6',
  fighting: '#C22E28',
  poison: '#A33EA1',
  ground: '#E2BF65',
  flying: '#A98FF3',
  psychic: '#F95587',
  bug: '#A6B91A',
  rock: '#B6A136',
  ghost: '#735797',
  dragon: '#6F35FC',
  dark: '#705746',
  steel: '#B7B7CE',
  fairy: '#D685AD',
};

export const typeHandler = (types) => {
  if (types.length > 1) {
    var typesString = '';
    types.forEach((type) => {
      typesString += type.type.name + (type.slot === 1 ? ' | ' : '');
    });
    return typesString;
  }
  return types[0].type.name;
}

export const typeColor = (type) => {
  return colours[type];
}