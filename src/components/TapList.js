import React from 'react';
import PropTypes from 'prop-types';
import Tap from './Tap';
import { Card } from 'semantic-ui-react';

const TapList = (props) => {
  return (
    <div>
      <Card.Group centered>
      {props.tapList.map((tap) =>
        <Tap 
          tap={tap}
          key={tap.id}
        />
      )}
      </Card.Group>
    </div>
  );
}

TapList.propTypes = {
  tapList: PropTypes.array.isRequired
}

export default TapList;
