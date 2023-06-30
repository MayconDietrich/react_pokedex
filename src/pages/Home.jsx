import React from 'react'
import NavBar from '../components/NavBar'
import PokemonCard from '../components/PokemonCard'
import { Container } from '@mui/material'

export const Home = () => {
  return (
    <div>
        <NavBar/>
        <Container maxWidth="xg">
          <PokemonCard/>
        </Container>
    </div>
  )
}
