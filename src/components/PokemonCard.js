import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  constructor() {
    super() 

    this.state = {
      clicked: false
    }
  }

  handleClick = (e) => {
    this.setState({clicked: !this.state.clicked})
  }

  render() {
      const pokemon = this.props
    return (
      <Card>
        <div onClick={this.handleClick}>
          <div className="image">
            <img src={this.state.clicked ? pokemon.back : pokemon.front} alt={pokemon.name} />
          </div>
          <div className="content">
        <div className="header">{pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {pokemon.hp}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard