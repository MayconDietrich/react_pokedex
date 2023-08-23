import React, { useEffect } from 'react'
import NavBar from '../components/NavBar'
import { Box, Chip, Container, Divider, Paper, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from '@mui/material'
import PokemonTable from '../components/PokemonTable'
import { useNavigate } from 'react-router-dom'
import { typeColor } from '../utils'

export const Profile = ({ pokemonData }) => {
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
          background: `linear-gradient(180deg, ${mainTypeColor} 0%, rgba(255,255,255,1) 80%)`, padding: '16px'
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
            {(sprites.front_female || sprites.front_shiny || sprites.front_shiny_female) &&
              <>
                <Divider>Variações</Divider>
                <Box display="flex" justifyContent="space-around">
                  <Box component="img" src={sprites.front_female} width="25%" height="25%" />
                  <Box component="img" src={sprites.front_shiny} width="25%" height="25%" />
                  <Box component="img" src={sprites.front_shiny_female} width="25%" height="25%" />
                </Box>
              </>
            }
            <Divider>Status</Divider>
            <TableContainer component={Paper} sx={{
              height: 'fit-content',
              maxWidth: '500px',
              margin: '0 auto',
              padding: '4px',
              display: 'flex',
              justifyContent: 'center',
              backgroundColor: 'transparent',
            }}>
              <Table aria-label="pokemon table">
                <TableBody>
                  <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell sx={{ fontWeight: 'bold' }}>HP: </TableCell>
                    <TableCell>{pokemonData.stats[0].base_stat}</TableCell>
                  </TableRow>
                  <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell sx={{ fontWeight: 'bold' }}>Attack: </TableCell>
                    <TableCell>{pokemonData.stats[1].base_stat}</TableCell>
                  </TableRow>
                  <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell sx={{ fontWeight: 'bold' }}>Defense: </TableCell>
                    <TableCell>{pokemonData.stats[2].base_stat}</TableCell>
                  </TableRow>
                  <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell sx={{ fontWeight: 'bold' }}>Special Attack: </TableCell>
                    <TableCell>{pokemonData.stats[3].base_stat}</TableCell>
                  </TableRow>
                  <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell sx={{ fontWeight: 'bold' }}>Special Defense: </TableCell>
                    <TableCell>{pokemonData.stats[4].base_stat}</TableCell>
                  </TableRow>
                  <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell sx={{ fontWeight: 'bold' }}>Speed: </TableCell>
                    <TableCell>{pokemonData.stats[5].base_stat}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
            <Divider sx={{ marginTop: '32px' }}>Ataques</Divider>
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
