import { RECEIVE_ALL_POKEMON } from "../actions/pokemon_actions";


const pokemonReducer = (state = {}, action) => {
switch (action.type) {
  case RECEIVE_ALL_POKEMON: {
    Object.freeze(state)
    debugger 
    return Object.assign({}, action.pokemon) // better than for each because that expects an array. 
  }

  default: 
    return state; 

 }
}

export default pokemonReducer; 
