import React from 'react'
import './Card.scss';

const Card = props => {
    const { character } = props;

    return (
        <div className="card" onClick={props.onClick}>
            <h2>{character.name}</h2>
            <ul>
                <li>Height: {character.height}</li>
                <li>Mass (kg): {character.mass}</li>
                <li>Hair color: {character.hair_color}</li>
                <li>Skin color: {character.skin_color}</li>
                {character.homeWorldInfo ?
                    <li>Homeworld: {character.homeWorldInfo.name}</li>
                    : null
                }
            </ul>
        </div>
    )
};

export default Card;
