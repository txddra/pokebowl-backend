// Your code here.
// (With the following added to get you started.)
// The 2D array we'll need to reference to return the right data.
// Check it out to see its content and shape!
const pokemon = require('./pokemon.js');
// we want to give the function the name of a pokemon
//we want to loop through the given array of pokemon
//return the whole row of the pokemon called
//return null if no pokemon exists in the data
//
const getRow = function(str){
  for(const pokemonName of pokemon){
  
    if(str == pokemonName[0]){
      return pokemonName
    }
    
  
  }
  return null
}

// OUR code here.

if (typeof getRow === 'undefined') {
  getRow = undefined;
}

module.exports = getRow;
