import { connect } from 'react-redux' 
import { selectAllPokemon } from '../../reducers/selectors'
import { requestAllPokemon } from '../../actions/pokemon_actions'
import PokemonIndex from "./Pokemon_Index"
const mapStateToProps = state => {            // returns a slice of state for us we want all pokemon. no items 
  return {
    pokemon: selectAllPokemon(state) 
  }
}; 

const mapDispatchToProps = dispatch => {       // retursn a function that returns a function that invokes the action of requestallpokemon 
  return {
  requestAllPokemon: () => {
    return dispatch(requestAllPokemon())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonIndex);  //pass it onto PokemonIndex our presentational component. 