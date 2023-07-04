import React from 'react';
import './Characters.css';
const Characters = ({id, name, status, species, gender, image}) => {
    return (
        <div className={'member'}>
            <h2>{id} {name} {status} </h2>
            <p>{status} {species} {gender}</p>
            <img src={image} alt={name}/>

        </div>
    );
};

export default Characters;
