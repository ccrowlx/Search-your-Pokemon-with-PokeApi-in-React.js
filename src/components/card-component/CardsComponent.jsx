import React, { useState, useEffect } from "react";
import axios from "axios";

import "../card-component/Cards.css";

export function CardsComponent({ namePokemon }) {
  const [pokemonData, setPokemonData] = useState();
  const [pokemonHabitatData, setPokemonHabitatData] = useState();

  useEffect(() => {
    if (namePokemon) {
      const lowerCaseName = namePokemon.toLowerCase();

      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${lowerCaseName}`)
        .then((response) => {
          setPokemonData(response.data);
        })
        .catch((error) => {
          console.error(error);
        });

      axios
        .get(`https://pokeapi.co/api/v2/pokemon-species/${lowerCaseName}`)
        .then((response) => {
          setPokemonHabitatData(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [namePokemon]);

  if (!namePokemon || !pokemonData || !pokemonHabitatData) {
    return null;
  }

  const { sprites, name, types } = pokemonData;
  const imageUrl = sprites.front_default;
  const pokemonName = name;
  const pokemonType = types[0].type.name;
  const pokemonHabitat = pokemonHabitatData.habitat.name;

  return (
    <div className="card">
      <div className="card-pokemon-info">
        <div className="content-name">
          <h2 className="style-name">Nombre :</h2>
          <h2 className="style-name-poke-name">{pokemonName}</h2>
        </div>
        <div className="content-type">
          <h2 className="style-name-type">Tipo :</h2>
          <h2 className="style-name-poke-type">{pokemonType}</h2>
        </div>
        <div className="content-habitat">
          <h2 className="style-name-habitat">Habitat :</h2>
          <h2 className="style-name-poke-habitat">{pokemonHabitat}</h2>
        </div>
      </div>
      <div className="card-pokemon-image">
        <img src={imageUrl} alt="Imagen de la tarjeta" className="card-image" />
      </div>
    </div>
  );
}

export default CardsComponent;