import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { typeColor, typeHandler } from '../../utils';
import { Box } from '@mui/material';

export default function PokemonCard({ name, image, types, pokedexNumber }) {
  const mainTypeColor = typeColor(types[0].type.name);

  return (
    <Card sx={{
      width: '300px',
      height: '150px',
      display: 'flex',
      flexDirection: 'row-reverse',
      backgroundColor: mainTypeColor,
      justifyContent: 'space-around',
      boxShadow: `${mainTypeColor + 'b0'} 0px 8px 24px`,
      backgroundImage: `url("assets/pokeball.png")`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '125% -35%;',
    }} >
      <CardMedia component="img" image={image} title={name}
        sx={{ width: 150, height: 150 }} />
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