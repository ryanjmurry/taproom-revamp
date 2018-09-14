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
          onPintSale={props.onPintSale}
          onGrowlerSale={props.onGrowlerSale}
          key={tap.id}
        />
      )}
      </Card.Group>
    </div>
  );
}

TapList.propTypes = {
  tapList: PropTypes.array.isRequired,
  onPintSale: PropTypes.func.isRequired,
  onGrowlerSale: PropTypes.func.isRequired,
}

export default TapList;
