import React, { useEffect } from 'react'
import NavBar from '../components/NavBar'
import { Box, Chip, Container, Divider, Paper, Typography } from '@mui/material'
import PokemonTable from '../components/PokemonTable'
import { useNavigate } from 'react-router-dom'

export const Profile = ({ pokemonData }) => {
  const { name, sprites, moves } = pokemonData || {};
  const navigate = useNavigate();

  useEffect(() => {
    if (!pokemonData) navigate('/');
  }, []);

  if (!pokemonData) return null;

  return (
    <>
      <NavBar hideSearch />
      <Container maxWidth="md">
        <Paper elevation={3}>
          <Box display="flex" flexDirection="column" p={3}>
            <Typography variant="h4">{name}</Typography>
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
            <Divider>Ataques</Divider>
            <Box textAlign="center" marginTop="16px">
              {
                moves.map((moveData, key) => <Chip key={key} sx={{ m: '5px' }} label={moveData.move.name} />)
              }
            </Box>
          </Box>
        </Paper>
      </Container>
    </>
  )
}
