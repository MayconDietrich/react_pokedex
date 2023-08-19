import React, { useEffect } from 'react'
import NavBar from '../components/NavBar'
import { Box, Chip, Container, Divider, Paper, Typography } from '@mui/material'
import PokemonTable from '../components/PokemonTable'
import { useNavigate } from 'react-router-dom'
import { typeColor } from '../utils'

export const Profile = ({ pokemonData }) => {
  console.log("🚀 ~ file: Profile.jsx:8 ~ Profile ~ pokemonData:", pokemonData)
  const { name, sprites, moves } = pokemonData || {};
  const navigate = useNavigate();

  useEffect(() => {
    if (!pokemonData) navigate('/');
  }, []);

  if (!pokemonData) return null;
  const mainTypeColor = typeColor(pokemonData.types[0].type.name);

  return (
    <>
      <NavBar hideSearch />
      <Container maxWidth="md" sx={{ marginBottom: '2rem' }}>
        <Paper elevation={3} sx={{
          background: `linear-gradient(180deg, ${mainTypeColor} 0%, rgba(255,255,255,1) 80%)`,
        }}>
          <Box display="flex" flexDirection="column" p={3}>
            <Box display="flex" alignItems="center">
              <img src="assets/pokeball.png" alt="pokeball" width="40px" height="40px" />
              <Typography variant="h4" ml="10px" sx={{ fontWeight: 'bold' }}>{name}</Typography>
            </Box>
            <Box display="flex" alignItems="center" width="100%" marginBottom="16px" sx={{
              flexDirection: {
                xs: 'column', md: 'row'
              }
            }}>
              <Box component="img" src={sprites.front_default} width="50%" height="50%" />
              <PokemonTable pokemonData={pokemonData} />
            </Box>
          </Box>
          <Box width="100%">
            <Divider>Variações</Divider>
            <Box display="flex" justifyContent="space-around">
              <Box component="img" src={sprites.front_female} width="25%" height="25%" />
              <Box component="img" src={sprites.front_shiny} width="25%" height="25%" />
              <Box component="img" src={sprites.front_shiny_female} width="25%" height="25%" />
            </Box>
          </Box>
        </Paper>
      </Container>
    </>
  )
}
