import React from 'react';

const data = [
  { Year: 2000, Population: 1000000, GDP: 500000 },
  { Year: 2010, Population: 1500000, GDP: 700000 },
  { Year: 2020, Population: 2000000, GDP: 900000 }
];


const DataDisplay = ({ data }) => {
  return (
    <div>
      {data.map((item, index) => (
        <div key={index}>
          <p>Year: {item.Year}</p>
          <p>Population: {item.Population}</p>
          <p>GDP: {item.GDP}</p>
        </div>
      ))}
    </div>
  );
};


const App = () => {
  const dataArray = data;

  return (
    <div>
      <h1>Data Display</h1>
      <DataDisplay data={dataArray} />
    </div>
  );
};

export default App;



import React from 'react';

const results = [
  { name: "Luke Skywalker", gender: "male", hair_color: "blond", eye_color: "blue" },
  { name: "Leia Organa", gender: "female", hair_color: "brown", eye_color: "brown" },
  { name: "Darth Vader", hair_color: "none", eye_color: "yellow" },
  { name: "Yoda", gender: "male", hair_color: "white", eye_color: "green" },
  { name: "R2-D2", gender: "n/a", hair_color: "n/a", eye_color: "red" }
];


const CharacterInfo = ({ name, gender, hair_color, eye_color }) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>Gender: {gender !== "n/a" ? gender : "Unknown"}</p>
      {hair_color && hair_color !== "none" && <p>Hair Color: {hair_color}</p>}
      {eye_color && <p>Eye Color: <span style={{ color: eye_color }}>{eye_color}</span></p>}
    </div>
  );
};


const CharacterList = ({ characters }) => {
  return (
    <div>
      {characters.map((character, index) => (
        <CharacterInfo
          key={index}
          name={character.name}
          gender={character.gender}
          hair_color={character.hair_color}
          eye_color={character.eye_color}
        />
      ))}
    </div>
  );
};

const App = () => {
  const charactersArray = results;

  return (
    <div>
      <h1>Star Wars Characters</h1>
      <CharacterList characters={charactersArray} />
    </div>
  );
};

export default App;



import React, { useState, useEffect } from 'react';
import './styles.css';

const App = () => {
  const [episodes, setEpisodes] = useState([]);
  const [characters, setCharacters] = useState([]);

 
  useEffect(() => {
    fetch('https://rickandmortyapi.com/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: `
          query {
            episodes(page: 1) {
              results {
                name
                air_date
                characters {
                  name
                  image
                }
              }
            }
          }
        `
      })
    })
    .then(response => response.json())
    .then(data => {
      setEpisodes(data.data.episodes.results);
    })
    .catch(error => console.error(error));
  }, []);


  useEffect(() => {
    fetch('https://rickandmortyapi.com/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: `
          query {
            characters(page: 1) {
              results {
                name
                gender
                image
                episode {
                  name
                  air_date
                }
              }
            }
          }
        `
      })
    })
    .then(response => response.json())
    .then(data => {
      setCharacters(data.data.characters.results);
    })
    .catch(error => console.error(error));
  }, []);


  const Character = ({ name, gender, image, episodes }) => (
    <div className="character">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>Gender: {gender}</p>
      <p>Appeared in:</p>
      <ul>
        {episodes.map((episode, index) => (
          <li key={index}>{episode.name} ({episode.air_date})</li>
        ))}
      </ul>
    </div>
  );


  const Characters = ({ characters }) => (
    <div className="characters">
      <h2>Characters</h2>
      <div className="character-list">
        {characters.map((character, index) => (
          <Character
            key={index}
            name={character.name}
            gender={character.gender}
            image={character.image}
            episodes={character.episode}
          />
        ))}
      </div>
    </div>
  );


  const Episode = ({ name, air_date, characters }) => (
    <div className="episode">
      <h2>{name}</h2>
      <p>Air Date: {air_date}</p>
      <p>Characters:</p>
      <ul>
        {characters.map((character, index) => (
          <li key={index}>{character.name}</li>
        ))}
      </ul>
    </div>
  );

 
  const Episodes = ({ episodes }) => (
    <div className="episodes">
      <h1>Episodes</h1>
      <div className="episode-list">
        {episodes.map((episode, index) => (
          <Episode
            key={index}
            name={episode.name}
            air_date={episode.air_date}
            characters={episode.characters}
          />
        ))}
      </div>
    </div>
  );

  return (
    <div className="app">
      <Episodes episodes={episodes} />
      <Characters characters={characters} />
    </div>
  );
};

export default App;