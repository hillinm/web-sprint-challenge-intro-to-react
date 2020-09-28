import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CharacterCard from '../components/CharacterCard'

export default function CharPage() {
    const [character, setCharacter] = useState([]);
  
    const effectFn = () => {
            axios
            .get('https://swapi.dev/api/people/')
            .then(response => {
              console.log(response.data.results)
              setCharacter(response.data.results)

            })
            .catch((error) => console.log("error"));
          }

useEffect(effectFn, [setCharacter]);


    return (
        <div className='character'>
        {character.map((character) => {
          return <CharacterCard 
                    name={character.name} 
                    height={character.height} 
                    hair_color={character.hair_color} 
                    eye_color={character.eye_color}
                    birth_year={character.birth_year}
                    homeworld= {character.homeworld} />
        })}
      </div>
    );
}
