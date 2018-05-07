import React from 'react';
import CharCard from './CharCard';  

const CharacterList = props => {
    return (
    <div className='CardsList.css'>
        {props.chars.map(char => {
            return <CharCard key={char.url} char={char} /> 
        })}
    </div>
    ); 
    // iterate over props.chars
    // return a new array of elements for the React virtual DOM
}; 

export default CharacterList; 