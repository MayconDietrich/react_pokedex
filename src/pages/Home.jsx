import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import PokemonCard from '../components/PokemonCard'
import { Container, Grid } from '@mui/material'
import axios from 'axios'

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
  
  return (
    <div>
        <NavBar/>
        <Container maxWidth="false">
        <Grid container>
          {pokemon.map((pkm, key) => 
            <Grid item xs={3} key={key}>
              <PokemonCard name={pkm.data.name} image={pkm.data.sprites.front_default}/>
            </Grid>
          )}
        </Grid>
        </Container>
    </div>
  )
}
