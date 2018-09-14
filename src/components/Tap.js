import React from 'react';
import PropTypes from 'prop-types';
import { Card, Progress, Button } from 'semantic-ui-react';

const Tap = (props) => {
 const { name, brewery, style, abv, pintPrice, growlerPrice, pintsRemaining, description, id } = props.tap;

 const handlePintSale = () => {
   props.onPintSale(id)
 }

 const handleGrowlerSale = () => {
   props.onGrowlerSale(id)
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
          <Button onClick={handlePintSale}>Sell Pint</Button>
          <Button onClick={handleGrowlerSale}>Sell Growler</Button>
        </Card.Content>
        {/* <Card.Content extra>
          <Progress percent={pintsRemaining} indicating />
        </Card.Content> */}
      </Card>
    </div>
  );
}

Tap.propTypes = {
  tap: PropTypes.object.isRequired,
  onPintSale: PropTypes.func.isRequired,
  onGrowlerSale: PropTypes.func.isRequired
}

export default Tap;