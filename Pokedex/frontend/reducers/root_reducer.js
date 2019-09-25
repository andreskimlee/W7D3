import { combineReducers }  from 'redux' 
import entitiesReducer from './entities_reducer'

const rootReducer = combineReducers({ entities: entitiesReducer}) //question here, what slice of state is this? 

export default rootReducer; 

// {entities: {pokemon: all pokemon} }  