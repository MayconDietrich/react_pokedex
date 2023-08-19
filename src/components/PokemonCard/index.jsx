import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { typeHandler } from '../../utils';
import { Box } from '@mui/material';

export default function PokemonCard({ name, image, types, pokedexNumber }) {
  const mainType = types[0].type.name;
  const colours = {
    normal: '#A8A77A',
    fire: '#EE8130',
    water: '#6390F0',
    electric: '#F7D02C',
    grass: '#7AC74C',
    ice: '#96D9D6',
    fighting: '#C22E28',
    poison: '#A33EA1',
    ground: '#E2BF65',
    flying: '#A98FF3',
    psychic: '#F95587',
    bug: '#A6B91A',
    rock: '#B6A136',
    ghost: '#735797',
    dragon: '#6F35FC',
    dark: '#705746',
    steel: '#B7B7CE',
    fairy: '#D685AD',
  };

  return (
    <Card sx={{
      width: '300px',
      height: '150px',
      display: 'flex',
      flexDirection: 'row-reverse',
      backgroundColor: colours[mainType],
      justifyContent: 'space-around',
      boxShadow: `${colours[mainType] + 'b0'} 0px 8px 24px`,
      backgroundImage: `url("assets/pokeball.png")`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '125% -35%;',
    }} >
      <CardMedia component="img" image={image} title={name}
        sx={{ width: 150, height: 150 }} />
      {/* <CardMedia component="img" src='assets/pokeball.png' title={name}
        sx={{ width: 70, height: 70, position: 'relative', left: '0px' }} /> */}
      <CardContent>
        <Typography variant="caption">
          #{pokedexNumber}
        </Typography>
        <Typography mt={-1} variant="h6" sx={{ fontWeight: 'bold' }}>
          {name}
        </Typography>
        <Box sx={{
          boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset',
          borderRadius: '5px',
          padding: '4px',
          display: 'flex',
          justifyContent: 'center'
        }}>
          <Typography variant="caption" sx={{ color: 'white', fontWeight: 'bold' }}>
            {typeHandler(types)}
          </Typography>

        </Box>
      </CardContent>
    </Card>
  );
}