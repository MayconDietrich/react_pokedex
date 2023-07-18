import { Skeleton } from '@mui/material';
import { Container } from "@mui/system";
import React from 'react';

export const Skeletons = () => {
  return (
    <Container maxwidht="xxl" display="flex" flexdirextion="row">
      <Skeleton variant="rectangular" animation="wave" width={300} height={300} sx={{ marginBottom: '1em' }} />
      <Skeleton variant="rectangular" animation="wave" width={300} height={300} sx={{ marginBottom: '1em' }} />
      <Skeleton variant="rectangular" animation="wave" width={300} height={300} sx={{ marginBottom: '1em' }} />
      <Skeleton variant="rectangular" animation="wave" width={300} height={300} sx={{ marginBottom: '1em' }} />
      <Skeleton variant="rectangular" animation="wave" width={300} height={300} sx={{ marginBottom: '1em' }} />
      <Skeleton variant="rectangular" animation="wave" width={300} height={300} sx={{ marginBottom: '1em' }} />
    </Container>
  )

}
