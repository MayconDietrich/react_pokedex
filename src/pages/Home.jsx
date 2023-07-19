import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import PokemonCard from '../components/PokemonCard'
import { Container, Grid } from '@mui/material'
import axios from 'axios'
import { Skeletons } from '../components/Skeletons'

export const Home = () => {
  const [pokemon, setPokemon] = useState([]);
  useEffect(() => {
    getPokemon();
  }, []);

  const getPokemon = () => {
    var endpoints = [];
    for (let i = 1; i <= 151; i++) {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
    }
    axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then((res) => setPokemon(res));
  }

  const pokemonFilter = (name) => {
    var filteredPokemon = [];
    if (name === '') {
      getPokemon();
      return;
    }
    for (var i in pokemon) {
      if (pokemon[i].data.name.includes(name.toLowerCase())) {
        filteredPokemon.push(pokemon[i]);
      }
    }
    setPokemon(filteredPokemon);
  }

  return (
    <div>
      <NavBar pokemonFilter={pokemonFilter} />
      <Container maxWidth="false">
        <Grid container spacing={3}>
          {pokemon.length === 0 ? <Skeletons /> :
            pokemon.map((pkm, key) =>
              <Grid item xs={12} sm={6} md={3} lg={2} key={key}  sx={{
                width: '100vw',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
          }}>
                <PokemonCard name={pkm.data.name} image={pkm.data.sprites.front_default} types={pkm.data.types} />
              </Grid>
            )
          }
        </Grid>
      </Container>
    </div>
  )
}
