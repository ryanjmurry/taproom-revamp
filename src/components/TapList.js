import React from 'react';
import PropTypes from 'prop-types';
import Tap from './Tap';

const TapList = (props) => {
  return (
    <div>
      {props.tapList.map((tap) =>
        <Tap 
          tap={tap}
          key={tap.id}
        />
      )}
    </div>
  );
}

TapList.propTypes = {
  tapList: PropTypes.array.isRequired
}

export default TapList;
