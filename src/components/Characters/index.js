import React from "react";
import "./Characters.scss";

import Form from "../Form";
import Card from "../Card";
import { connect } from 'react-redux';

const Characters = props => {
  return (
    <div className="container">
      <Form />
      {props.characters.map(character => (
        <Card
          key={character.name}
          character={character}
        />
      ))}
    </div>
  );
};

const mapStateToProps = state => ({
  characters: state,
});

export default connect(mapStateToProps)(Characters);
