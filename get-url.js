// Your code here.
// Note that you do NOT need the data for this function!

const pokemon = require("./pokemon");

//creating a function that only returns the  url portion of the array

const getUrl = function(pokemonName){
  for(const row of pokemon){  
    // console.log(row[1])
if(row === pokemon){

  return row[1]

}
  }
return null
}
// const pokeRow 

// OUR code here.

if (typeof getUrl === 'undefined') {
  getUrl = undefined;
}


module.exports = getUrl; 
