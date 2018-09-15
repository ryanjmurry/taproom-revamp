import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, Progress, Button, Modal } from 'semantic-ui-react';
import EditTap from './EditTap';

class Tap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false
    }
  }

  handleModalOpen = () => {
    this.setState({
      modalOpen: true
    })
  }

  handleModalClose = () => {
    this.setState({
      modalOpen: false
    })
  }

  handlePintSale = () => {
    this.props.onPintSale(this.props.tap.id);
  }
 
  handleGrowlerSale = () => {
    this.props.onGrowlerSale(this.props.tap.id)
  }
 
  handleDeleteTap = () => {
   this.props.onTapRemoval(this.props.tap.id);
  }

  render() {
    const { name, brewery, style, abv, pintPrice, growlerPrice, pintsRemaining, description} = this.props.tap;
    if (this.props.currentRouterPath === '/admin') {
      return (
        <Card>
          <Card.Content>
            <Card.Header><span>{name}</span> by <span>{brewery}</span></Card.Header>
          </Card.Content>
          <Card.Content>
            {style}, {abv}%, ${pintPrice}, ${growlerPrice}, {description}
          </Card.Content>
          <Card.Content extra>
            <Progress progress='value' value={pintsRemaining} total={124} label='pints remaining' indicating/>
            <Button onClick={this.handlePintSale}>Sell Pint</Button>
            <Button onClick={this.handleGrowlerSale}>Sell Growler</Button>
            <Button onClick={this.handleDeleteTap}>Delete</Button>
            <Modal 
              trigger={<Button onClick={this.handleModalOpen}>Edit</Button>}
              open={this.state.modalOpen}
              onClose={this.handleModalClose}
              basic 
              size='small'>
              <Modal.Content>
                <EditTap 
                  tap={this.props.tap}
                  onTapUpdate={this.props.onTapUpdate}
                  onModalClose={this.handleModalClose}
                />
              </Modal.Content>
            </Modal>
          </Card.Content>
        </Card>
      )
    } else {
      return (
        <Card>
          <Card.Content>
            <Card.Header><span>{name}</span> by <span>{brewery}</span></Card.Header>
          </Card.Content>
          <Card.Content>
            {style}, {abv}%, ${pintPrice}, ${growlerPrice}, {description}
          </Card.Content>
          <Card.Content extra>
            <Progress progress='value' value={pintsRemaining} total={124} label='pints remaining' indicating/>
          </Card.Content>
        </Card>
      )
    }
  }
}


Tap.propTypes = {
  tap: PropTypes.object.isRequired,
  onPintSale: PropTypes.func.isRequired,
  onGrowlerSale: PropTypes.func.isRequired,
  onTapRemoval: PropTypes.func.isRequired,
  onTapUpdate: PropTypes.func.isRequired,
  currentRouterPath: PropTypes.string
}

export default Tap;
