import React from 'react';
import {
  Grid,
  Link,
  Typography
} from '@material-ui/core';

function ProjectAssureful() {
  return (
    <React.Fragment>
      <Typography variant="h5">Commercial Liability Insurance</Typography>
      <Typography variant="caption">Date: April 2020</Typography>
      <Link display="block" variant="caption" href="https://assureful.com">Assureful Website</Link>
      <Grid container spacing={1}>
        <Grid item xs={8} md={6}>
          <img alt="Assureful Dashboard Screenshot" src="images/project_assureful_400.png" />
        </Grid>
        <Grid item xs={8} md={6}>
          <Typography variant="body1">
            Currently architecting a software solution for a stealth startup in the commercial insurance space.
            Currently architecting a software solution for a stealth startup in the commercial insurance space.
            Currently architecting a software solution for a stealth startup in the commercial insurance space.
            Currently architecting a software solution for a stealth startup in the commercial insurance space.
            Currently architecting a software solution for a stealth startup in the commercial insurance space.
            Currently architecting a software solution for a stealth startup in the commercial insurance space.
          </Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default ProjectAssureful;
