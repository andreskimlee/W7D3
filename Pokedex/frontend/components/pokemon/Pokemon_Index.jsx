import React from 'react'
import PokemonIndexItems from './pokemon_index_items'


class PokemonIndex extends React.Component { 
  constructor(props) {
    super(props) 

  }

  componentDidMount() {
    this.props.requestAllPokemon() 
  }

  render () {
    const { pokemon } = this.props
    return (
      <div className="pokemon-index">
        {(PokemonIndexItems(pokemon))}
      </div>
    ) 
  }  


}

export default PokemonIndex; 
// { pokemon.map((ele, idx) => (<li id={ele.id}>{idx + 1} : {ele.name} <img src={ele.image_url} /> </li>)) }