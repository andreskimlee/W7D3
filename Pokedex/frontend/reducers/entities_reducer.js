import { combineReducers } from "redux" 
import pokemonReducer from "./pokemon_reducer" 

const entitiesReducer = combineReducers({  /// at the key of pokemon is the pokemonReducer which return a slice of the total state where it is all the pokemon. 
  pokemon: pokemonReducer 
});

export default entitiesReducer; 