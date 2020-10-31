import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'
const url = 'http://localhost:3000/pokemon'

class PokemonPage extends React.Component {
  constructor() {
    super()

    this.state = {
      pokemon: [],
      search: ''
    }
  }

  componentDidMount = () => {
    fetch(url)
    .then(res => res.json())
    .then(pokemon => {
      this.setState({pokemon: pokemon})
    })
  }

  handleFilter = (e) => {
    this.setState({search: e.target.value})
  }

  addPokemon = (pokemon) => {
    fetch(url, {
      method: 'POST',
      headers: {
        "Content-Type":"application/json",
        "Accepts":"application/json"
      },
      body: JSON.stringify(pokemon)
    })
    .then(res => res.json())
    .then(newPokemon => this.setState({pokemon: [newPokemon, ...this.state.pokemon]}))
  }

  render() {
    const findPokemon = this.state.pokemon.filter(poke => poke.name.includes(this.state.search))
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addPokemon={this.addPokemon}/>
        <br />
        <Search handleFilter={this.handleFilter}/>
        <br />
        <PokemonCollection pokemon={findPokemon}/>
      </Container>
    )
  }
}

export default PokemonPage
