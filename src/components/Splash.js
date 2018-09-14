import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';

const Splash = (props) => {
  return (
    <div>
      <h1>Just Tap It</h1>
      <img src={require('./../assets/just-tap-it.png')} alt='just tap it'/>
      Are you over 21 years of age?
      <Button onClick={props.onShowSiteContent}>
        Yes
      </Button>
      <Button>
        No
      </Button>
    </div>
  );
}

Splash.propTypes = {
  onShowSiteContent: PropTypes.func.isRequired
}

export default Splash;
