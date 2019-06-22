import React, { Component } from 'react'
import './Characters.scss';

import Card from '../Card'

class Characters extends Component {
    state = {
        characters: [{
            "name": "Luke Skywalker",
            "height": "172",
            "mass": "77",
            "hair_color": "blond",
            "skin_color": "fair",
        }]
    }

    render() {
        return (
            <div className="container">
                {this.state.characters.map(character =>
                    <Card key={character.name}
                        character={character}
                        />)
                }
            </div>
        )
    }
}

export default Characters;

