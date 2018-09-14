import React from 'react';
import PropTypes from 'prop-types';
import { Card, Progress, Button, Modal, Header, Icon } from 'semantic-ui-react';
import EditTap from './EditTap';

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
          <Button onClick={handleDeleteTap}>Delete</Button>
        </Card.Content>
      </Card>

      <EditTap 
        tap={props.tap}
        onTapUpdate={props.onTapUpdate}
      />
    </div>
  );
}

Tap.propTypes = {
  tap: PropTypes.object.isRequired,
  onPintSale: PropTypes.func.isRequired,
  onGrowlerSale: PropTypes.func.isRequired,
  onTapRemoval: PropTypes.func.isRequired,
  onTapUpdate: PropTypes.func.isRequired
}

export default Tap;

{/* <Modal trigger={<Button>Edit</Button>} basic size='small'>
            <Header icon='' content='' />
            <Modal.Content>
            </Modal.Content>
            <Modal.Actions>
              <Button basic color='red' inverted>
                <Icon name='remove' /> Cancel
              </Button>
              <Button color='green' inverted>
                <Icon name='checkmark' /> Submit
              </Button>
            </Modal.Actions>
          </Modal> */}
