export const selectAllPokemon = (state) => { 
  return Object.values(state.entitites.pokemon).map(poke => poke )
}