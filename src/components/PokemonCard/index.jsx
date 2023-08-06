import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function PokemonCard({ name, image, types }) {

  const typeHandler = () => {
    if (types.length > 1) {
      var typesString = '';
      types.forEach((type) => {
        typesString += type.type.name + (type.slot === 1 ? ' | ' : '');
      });
      return typesString;
    }
    return types[0].type.name;
  }

  return (
    <Card sx={{ width: '100%', display: 'flex', flexDirection: 'column' }} >
      <CardMedia component="img" image={image} title={name} height="200" sx={{ maxWidth: 250, alignSelf: 'center' }} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography gutterBottom variant="caption" component="div">
          {typeHandler()}
        </Typography>
        {/* <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography> */}
      </CardContent>
      {/* <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  );
}