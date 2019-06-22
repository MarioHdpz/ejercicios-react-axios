import React, { Component } from "react";
import axios from "axios";
import "./Characters.scss";

import Card from "../Card";

import { Link } from 'react-router-dom';

class Characters extends Component {
  state = {
    characters: []
  };

  componentDidMount = () => {
    this.getCharacters();
  };

  componentDidUpdate = prevProps => {
    if (prevProps.match.params.page !== this.props.match.params.page) {
      this.getCharacters();
    }
  }

  getCharacters = () => {
    const { params } = this.props.match;
    const page = params.page ? params.page : 1;
    axios.get(`https://swapi.co/api/people/?page=${page}`).then(response => {
      this.setState({ characters: response.data.results });
    });
  }

  handleCardClick = character => {
    const url = character.homeworld;
    axios.get(url).then(response => {
      this.addHomeworldInfo(character.name, response.data);
    });
  };

  addHomeworldInfo = (name, homeWorldInfo) => {
    const newCharacters = this.state.characters.slice();
    const index = this.state.characters.findIndex(
      character => character.name === name
    );
    newCharacters[index].homeWorldInfo = homeWorldInfo;
    this.setState({ characters: newCharacters });
  };

  render() {
    const { params } = this.props.match;
    const page = params.page ? parseInt(params.page) : 1;
    return (
      <div className="container">
        <div className="actions">
          {page > 1 ? <Link to={`/${page - 1}`}><div className="button">Prev</div></Link> : null}
          <Link to={`/${page + 1}`}><div className="button">Next</div></Link>
        </div>
        {this.state.characters.map(character => (
          <Card
            key={character.name}
            character={character}
            onClick={() => this.handleCardClick(character)}
          />
        ))}
        <div className="actions">
          {page > 1 ? <Link to={`/${page - 1}`}><div className="button">Prev</div></Link> : null}
          <Link to={`/${page + 1}`}><div className="button">Next</div></Link>
        </div>
      </div>
    );
  }
}

export default Characters;
