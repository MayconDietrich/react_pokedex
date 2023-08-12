import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import PokemonCard from '../components/PokemonCard'
import { Box, Container, Grid } from '@mui/material'
import axios from 'axios'
import { Skeletons } from '../components/Skeletons'
import { useNavigate } from 'react-router-dom'

export const Home = ({ setPokemonData }) => {
  const [pokemon, setPokemon] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getPokemon();
  }, []);

  const getPokemon = () => {
    var endpoints = [];
    for (let i = 1; i <= 151; i++) {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
    }
    axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then((res) => {
      setPokemon(res);
      setFilteredPokemon(res);
    });
  }

  const [filteredPokemon, setFilteredPokemon] = new useState(pokemon);

  const pokemonFilter = (event) => {
    const query = event;
    var updatedList = [...pokemon];
    updatedList = updatedList.filter((item) => {
      return item.data.name.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });
    setFilteredPokemon(updatedList);
  };

  const pokemonPickHandler = (pkmData) => {
    setPokemonData(pkmData);
    navigate('profile');
  }

  return (
    <div>
      <NavBar pokemonFilter={pokemonFilter} />
      <Container maxWidth="false">
        <Grid container spacing={3}>
          {pokemon.length === 0 ? <Skeletons /> :
            filteredPokemon.map((pkm, key) =>
              <Grid item xs={12} sm={6} md={3} lg={2} key={key} sx={{
                width: '100vw',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <Box onClick={() => pokemonPickHandler(pkm.data)} sx={{ cursor: 'pointer' }}>
                  <PokemonCard name={pkm.data.name} image={pkm.data.sprites.front_default} types={pkm.data.types} />
                </Box>
              </Grid>
            )
          }
        </Grid>
      </Container>
    </div>
  )
}
