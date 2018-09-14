import React from 'react';
import PropTypes from 'prop-types';
import { Card, Progress, Button } from 'semantic-ui-react';

const Tap = (props) => {
 const { name, brewery, style, abv, pintPrice, growlerPrice, pintsRemaining, description, id } = props.tap;

 const handlePintSale = () => {
   props.onPintSale(id);
 }

 const handleGrowlerSale = () => {
   props.onGrowlerSale(id)
 }

 const handleEditTap = () => {

 }

 const handleDeleteTap = () => {
  props.onTapRemoval(id);
 }


  return (
    <div>
      <Card>
        <Card.Content>
          <Card.Header><span>{name}</span> by <span>{brewery}</span></Card.Header>
        </Card.Content>
        <Card.Content>
          {style}, {abv}%, ${pintPrice}, ${growlerPrice}, {description}
        </Card.Content>
        <Card.Content extra>
          <Progress progress='value' value={pintsRemaining} total={124} label='pints remaining' indicating/>
          <Button onClick={handlePintSale}>Sell Pint</Button>
          <Button onClick={handleGrowlerSale}>Sell Growler</Button>
          <Button onClick={handleEditTap}>Edit</Button>
          <Button onClick={handleDeleteTap}>Delete</Button>
        </Card.Content>
      </Card>
    </div>
  );
}

Tap.propTypes = {
  tap: PropTypes.object.isRequired,
  onPintSale: PropTypes.func.isRequired,
  onGrowlerSale: PropTypes.func.isRequired,
  onTapRemoval: PropTypes.func.isRequired
}

export default Tap;