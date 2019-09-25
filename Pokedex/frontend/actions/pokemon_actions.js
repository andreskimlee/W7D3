export const RECEIVE_ALL_POKEMON = "RECEIVE_ALL_POKEMON"

export const receiveAllPokemon = (pokemon) => ({ //returns an action object 

  type: RECEIVE_ALL_POKEMON, 
  pokemon 
})

export const requestAllPokemon = () => dispatch =>
  APIUtil.fetchAllPokemon().then(pokemon =>
    dispatch(receiveAllPokemon(pokemon))
  );

  