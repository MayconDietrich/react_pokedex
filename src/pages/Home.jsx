import React, { useState } from 'react'
import NavBar from '../components/NavBar'
import PokemonCard from '../components/PokemonCard'
import { Box, Container, Grid } from '@mui/material'
import axios from 'axios'
import { Skeletons } from '../components/Skeletons'
import { useNavigate } from 'react-router-dom'
import ChooseGen from '../components/ChooseGen'

export const Home = ({ setPokemonData }) => {
  const [pokemon, setPokemon] = useState([]);
  const navigate = useNavigate();

  const getPokemon = (generation) => {
    console.log("🚀 ~ file: Home.jsx:19 ~ getPokemon ~ generation:", generation)

    var endpoints = [];
    var start = generation.start;
    var end = generation.end;
    console.log(start, end);
    for (let i = start; i <= end; i++) {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
    }
    axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then((res) => {
      console.log("🚀 ~ file: Home.jsx:25 ~ axios.all ~ res:", res)
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
    <>
      {pokemon.length <= 0 ? <ChooseGen getPokemon={getPokemon} /> :
        <>
          <NavBar pokemonFilter={pokemonFilter} />
          <Container maxWidth="false" sx={{ marginBottom: '2rem' }}>
            <Grid container spacing={3}>
              {pokemon.length === 0 ? <Skeletons /> :
                filteredPokemon.map((pkm, key) =>
                  <Grid item xs={12} sm={6} md={4} lg={3} key={key} sx={{
                    width: '100vw',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    <Box onClick={() => pokemonPickHandler(pkm.data)} sx={{ cursor: 'pointer' }}>
                      <PokemonCard name={pkm.data.name} image={pkm.data.sprites.front_default} types={pkm.data.types}
                        pokedexNumber={pkm.data.id} />
                    </Box>
                  </Grid>
                )
              }
            </Grid>
          </Container>
        </>
      }
    </>
  )
}
