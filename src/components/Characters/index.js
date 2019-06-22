import React, { Component } from 'react'
import axios from 'axios';
import './Characters.scss';

import Card from '../Card'

class Characters extends Component {
    state = {
        characters: []
    }

    componentDidMount = () => {
        axios.get('https://swapi.co/api/people/').then(response => {
            this.setState({characters: response.data.results})
        });
    }

    handleCardClick = character => {
        const url = character.homeworld;
        axios.get(url).then(response => {
            this.addHomeworldInfo(character.name, response.data);
        });
    }

    addHomeworldInfo = (name, homeWorldInfo) => {
        const newCharacters = this.state.characters.slice();
        const index = this.state.characters.findIndex(character => character.name === name);
        newCharacters[index].homeWorldInfo = homeWorldInfo;
        this.setState({characters: newCharacters})
    }



    render() {
        return (
            <div className="container">
                {this.state.characters.map(character =>
                    <Card key={character.name}
                        character={character}
                        onClick={() => this.handleCardClick(character)}
                        />)
                }
            </div>
        )
    }
}

export default Characters;

