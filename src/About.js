import React from 'react';
import {
  Typography
} from '@material-ui/core';

function About() {
  return (
    <React.Fragment>
      <Typography variant="h6">Profile</Typography>
      <Typography variant="body1">
        I'm a tech startup veteran, with more than 14 years of industry experience.
        I've worn multiple hats, starting in Flash/ActionScript 2.0, and eventually transitioning into Full-Stack web development.
        I've dabbled in a variety of web technologies, including Ruby/Rails, NodeJS, PostgresQL, React, Docker, Heroku, & various bits of AWS.
        When I'm not programming, you can usually find me riding my electric skateboard around San Francisco.
      </Typography>
    </React.Fragment>
  );
}

export default About;
