import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom'
import { Form } from 'semantic-ui-react';
import { v4 } from 'uuid';

class NewTapForm extends Component {

  handleFormSubmit = (e) =>{
    e.preventDefault();
    let newTap = {
      name: e.target.name.value,
      brewery: e.target.brewery.value,
      style: e.target.style.value,
      abv: e.target.abv.value,
      pintPrice: e.target.pint.value,
      growlerPrice: e.target.growler.value,
      xlGrowlerPrice: e.target.xlGrowler.value,
      description: e.target.description.value,
      id: v4()
    };
    this.props.onNewTapCreation(newTap);
    this.props.history.push('/taplist');
  }

  render() {
    return (
      <div>
         <Form onSubmit={this.handleFormSubmit.bind(this)}>
      {/* <Form.Group widths='equal'> */}
          <Form.Input label='Beer Name' name='name' placeholder='Beer Name' required />
          <Form.Input label='Brewery' name='brewery' placeholder='Brewery' required />
          <Form.Input label='Beer Style' name='style' placeholder='Beer Style' required />
          <Form.Input label='ABV' name='abv' type='number' placeholder='ABV' required />
          <Form.Input label='Pint Price' name='pint' type='number' placeholder='' required />
          <Form.Input label='Growler Price' name='growler' type='number' placeholder='' required />
          <Form.Input label='XL Growler Price' name='xlGrowler' type='number' placeholder='' required />
        {/* </Form.Group> */}
          <Form.TextArea label='Beer Description' name='description' placeholder='Describe the beer color, flavor, history, etc... ' />
        <Form.Button color='blue'>Submit Beer</Form.Button>
      </Form>
      </div>
    );
  }
}

NewTapForm.propTypes = {
  onNewTapCreation: PropTypes.func.isRequired
}


export default withRouter(NewTapForm);



