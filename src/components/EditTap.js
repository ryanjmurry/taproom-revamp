import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Icon } from 'semantic-ui-react';

class EditTap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.tap.name,
      brewery: this.props.tap.brewery,
      style: this.props.tap.style,
      abv: this.props.tap.abv,
      pintPrice: this.props.tap.pintPrice,
      growlerPrice: this.props.tap.growlerPrice,
      description: this.props.tap.description,
    }
  }

  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value })
  }

  handleSubmit = () => {
    let updatedTap = {
      name: this.state.name,
      brewery: this.state.brewery,
      style: this.state.style,
      abv: this.state.abv,
      pintPrice: this.state.pintPrice,
      growlerPrice: this.state.growlerPrice,
      description: this.state.description,
      pintsRemaining: this.props.tap.pintsRemaining,
      id: this.props.tap.id
    }
    this.props.onTapUpdate(updatedTap);
    this.props.onModalClose();
  }


  render() {
    const { name, brewery, style, abv, pintPrice, growlerPrice, description } = this.state
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
  {/* <Form.Group widths='equal'> */}
      <Form.Input 
        label='Beer Name' 
        name='name' 
        placeholder='Beer Name' 
        value={name} 
        onChange={this.handleChange}
        required 
      />
      <Form.Input 
        label='Brewery' 
        name='brewery' 
        placeholder='Brewery' 
        value={brewery}
        onChange={this.handleChange} 
        required 
      />
      <Form.Input 
        label='Beer Style' 
        name='style' 
        placeholder='Beer Style' 
        value={style}
        onChange={this.handleChange} 
        required 
      />
      <Form.Input 
      label='ABV' 
      name='abv' 
      type='number' 
      placeholder='ABV' 
      value={abv}
      onChange={this.handleChange} 
      required 
      />
      <Form.Input 
      label='Pint Price' 
      name='pintPrice' 
      type='number' 
      placeholder='' 
      value={pintPrice}
      onChange={this.handleChange} 
      required 
      />
      <Form.Input 
      label='Growler Price' 
      name='growlerPrice' 
      type='number' 
      placeholder='' 
      value={growlerPrice}
      onChange={this.handleChange} 
      required 
      />
    {/* </Form.Group> */}
      <Form.TextArea 
        label='Beer Description' 
        name='description' 
        placeholder='Describe the beer color, flavor, history, etc... ' 
        value={description}
        onChange={this.handleChange}
        />
      <Form.Button color='green' inverted>
        <Icon name='checkmark' /> Submit
      </Form.Button>
    </Form>
      </div>
    );
  }
}

EditTap.propTypes = {
  onTapUpdate: PropTypes.func.isRequired,
  onModalClose: PropTypes.func.isRequired
}

export default EditTap;
