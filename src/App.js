import React from 'react';
import './App.css';
import {
  Container,
  Grid,
  Typography
} from '@material-ui/core';
import Social from './Social';

function App() {
  return (
    <React.Fragment>
      <Container maxWidth="lg">
        <header className="App-header">
          <Container maxWidth="lg" align="center">
            <Typography variant="h3">Tyler J. Kuhn</Typography>
          </Container>
        </header>
        <main>
          <Grid container spacing={5}>
            <Grid item xs={12} md={8}>
              <Typography variant="h5">About</Typography>
              <Typography variant="body1">
                Currently architecting a software solution for a stealth startup in the commercial insurance space.
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Social />
            </Grid>
          </Grid>
        </main>
        <footer>
          <Container maxWidth="lg" align="center">
            <Typography variant="h6">Copyright © 2020 - Tyler J. Kuhn</Typography>
            <Typography variant="h6">Contact me: blackwatertepes at gmail dot com</Typography>
          </Container>
        </footer>
      </Container>
    </React.Fragment>
  );
}

export default App;
