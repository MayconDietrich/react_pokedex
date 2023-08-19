import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { typeHandler } from '../../utils';



export default function PokemonTable({ pokemonData }) {
  const { height, weight, types } = pokemonData;

  return (
    <TableContainer component={Paper} sx={{
      height: 'fit-content',
      maxWidth: '250px',
      boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset',
      borderRadius: '5px',
      padding: '4px',
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: 'transparent',
    }}>
      <Table aria-label="pokemon table">
        <TableBody>
          <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell sx={{ fontWeight: 'bold' }}>Altura: </TableCell>
            <TableCell>{height + 'cm'}</TableCell>
          </TableRow>
          <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell sx={{ fontWeight: 'bold' }}>Peso: </TableCell>
            <TableCell>{weight + 'g'}</TableCell>
          </TableRow>
          <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell sx={{ fontWeight: 'bold' }}>Tipo: </TableCell>
            <TableCell>{typeHandler(types)}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}