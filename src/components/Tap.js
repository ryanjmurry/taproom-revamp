import React from 'react';
import PropTypes from 'prop-types';
import { Card, Progress } from 'semantic-ui-react';

const Tap = (props) => {
 const { name, brewery, style, abv, pintPrice, growlerPrice, pintsRemaining, description } = props.tap;
  return (
    <div>
      <Card>
        <Card.Content>
          <Card.Header><span>{name}</span> by <span>{brewery}</span></Card.Header>
        </Card.Content>
        <Card.Content>
          {style}, {abv}%, ${pintPrice}, ${growlerPrice}, {description}
        </Card.Content>
        {/* <Card.Content extra>
          <Progress percent={pintsRemaining} indicating />
        </Card.Content> */}
      </Card>
    </div>
  );
}

Tap.propTypes = {
  tap: PropTypes.object
}

export default Tap;