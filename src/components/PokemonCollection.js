import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

const PokemonCollection = ({ pokemon }) => {
  // pokemon[0] ? console.log(pokemon[0]) : null
    return (
      <Card.Group itemsPerRow={6}>
        {pokemon.map(pokemon => {
          return(
            <PokemonCard 
            key={pokemon.id}
            name={pokemon.name}
            hp={pokemon.hp}
            front={pokemon.sprites.front}
            back={pokemon.sprites.back}
            />
          )
        })}
      </Card.Group>
    )
}

export default PokemonCollection
