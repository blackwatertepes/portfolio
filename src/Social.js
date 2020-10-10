import React from 'react';
import {
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

function Social() {
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
}

export default Social;
