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