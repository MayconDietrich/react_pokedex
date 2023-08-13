import * as React from 'react';
import './Style.css';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function ChooseGen({ getPokemon }) {
  const generations = {
    1: [1, 151],
    2: [152, 251],
    3: [252, 386],
    4: [387, 493],
    5: [494, 649],
    6: [650, 721],
    7: [722, 809],
    8: [810, 905],
    9: [906, 1010]
  }

  return (
    <>
      <Box className="titleBox">
        <Typography className="title" variant="h4">Choose Generation</Typography>
      </Box>
      <Container maxWidth="false">
        <Grid container spacing={3} marginTop="2rem">
          {Object.entries(generations).map((gen, key) =>
            <Grid item xs={12} sm={6} md={3} lg={2} key={key} sx={{
              width: '100vw',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <Card sx={{ maxWidth: 350 }} onClick={() => getPokemon(gen)}>
                <CardActionArea>
                  {key >= 9 ?
                    <CardMedia
                      component="img"
                      image={`/assets/gens/gen.png`}
                    /> :
                    <CardMedia
                      component="img"
                      image={`/assets/gens/gen${key + 1}.png`}
                    />
                  }
                </CardActionArea>
              </Card>
            </Grid>
          )
          }
        </Grid>
      </Container>
    </>
  );
}