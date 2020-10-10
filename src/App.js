import React from 'react';
import './App.css';
import {
  Container,
  Grid,
  Link,
  Typography
} from '@material-ui/core';
import {
  GitHub,
  LinkedIn,
  QuestionAnswerOutlined,
  SubjectOutlined
} from '@material-ui/icons';

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
              <Typography variant="h6">Social</Typography>
              <Link display="block" variant="body1" href="https://github.com/blackwatertepes" key="github">
                <Grid container direction="row" spacing={1} alignItems="center">
                  <Grid item>
                    <GitHub />
                  </Grid>
                  <Grid item>Github</Grid>
                </Grid>
              </Link>
              <Link display="block" variant="body1" href="https://linkedin.com/in/tylerkuhn" key="linkedin">
                <Grid container direction="row" spacing={1} alignItems="center">
                  <Grid item>
                    <LinkedIn />
                  </Grid>
                  <Grid item>LinkedIn</Grid>
                </Grid>
              </Link>
              <Link display="block" variant="body1" href="https://stackexchange.com/users/1728484/tyler-j-kuhn" key="stackexchange">
                <Grid container direction="row" spacing={1} alignItems="center">
                  <Grid item>
                    <QuestionAnswerOutlined />
                  </Grid>
                  <Grid item>StackExchange</Grid>
                </Grid>
              </Link>
              <Link display="block" variant="body1" href="https://medium.com/@tylerjkuhn" key="medium">
                <Grid container direction="row" spacing={1} alignItems="center">
                  <Grid item>
                    <SubjectOutlined />
                  </Grid>
                  <Grid item>Medium</Grid>
                </Grid>
              </Link>
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
