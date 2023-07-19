import { Grid, Skeleton } from '@mui/material';
import React from 'react';

export const Skeletons = () => {
  return (
    <>
      <Grid container spacing={3}>
        {Array(20).fill(1)
          .map((card, key) => (
            <Grid item xs={12} sm={6} md={3} lg={2} key={key}>
              <Skeleton variant="rounded" animation="wave" height={290} />
            </Grid>
          ))}
      </Grid>
    </>
  )

}
