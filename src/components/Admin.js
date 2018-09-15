import React from 'react';
import PropTypes from 'prop-types';
import TapList from './TapList';
import { Link } from 'react-router-dom';

const Admin = (props) => {
  return (
    <div>
      <Link to='/newtap'>Add New Tap</Link>
      <TapList  
        tapList={props.tapList} 
        onPintSale={props.onPintSale}
        onGrowlerSale={props.onGrowlerSale}
        onTapRemoval={props.onTapRemoval} 
        onTapUpdate={props.onTapUpdate}
        currentRouterPath={props.currentRouterPath}
      />
    </div>
  );
}

TapList.propTypes = {
  tapList: PropTypes.array.isRequired,
  onPintSale: PropTypes.func.isRequired,
  onGrowlerSale: PropTypes.func.isRequired,
  onTapRemoval: PropTypes.func.isRequired,
  onTapUpdate: PropTypes.func.isRequired,
  currentRouterPath: PropTypes.string
}

export default Admin;