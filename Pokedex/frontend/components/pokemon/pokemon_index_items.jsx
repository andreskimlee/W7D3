import { Link } from "react-router-dom";
import React from "react"

const pokemonItems = (pokemon) => (
  pokemon.map((ele, idx) => (
    <li key={ele.id}> <Link to={`${ele.id}` }> {idx + 1} {ele.name} <img src={ele.image_url} /> </Link> </li>
  ))
)

export default pokemonItems 