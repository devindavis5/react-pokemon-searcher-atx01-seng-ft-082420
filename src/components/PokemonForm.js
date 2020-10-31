import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  constructor() {
    super()

    this.state = {
      name: '',
      hp: 0,
      sprites: {
        front: '',
        back: ''
      }
    }
  }

  handleChange = (e) => {
    if (e.target.name === 'front') {
      this.setState({ sprites: {
        ...this.state.sprites, front: e.target.value
        }
         })
    } else if (e.target.name === 'back') {
      this.setState({ sprites: {
        ...this.state.sprites, back: e.target.value
        }
         })
    } else if (e.target.name === 'hp') {
      this.setState({ hp: parseInt(e.target.value) })
    } else {
      let {name, value} = e.target
      this.setState({ [name]: value })
    }
  }
  
  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={() => this.props.addPokemon(this.state)}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" onChange={this.handleChange}/>
            <Form.Input fluid label="hp" placeholder="hp" name="hp" onChange={this.handleChange}/>
            <Form.Input fluid label="Front Image URL" placeholder="url" name="front" onChange={this.handleChange}/>
            <Form.Input fluid label="Back Image URL" placeholder="url" name="back" onChange={this.handleChange}/>
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
