import React from 'react';
import PropTypes from 'prop-types';

const Tap = (props) => {
 const { name, brewery, style, abv, pintPrice, growlerPrice, xlGrowlerPrice, description } = props.tap;
  return (
    <div>
      
    </div>
  );
}

Tap.propTypes = {
  tap: PropTypes.object
}

export default Tap;