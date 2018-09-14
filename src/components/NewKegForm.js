import React from 'react';
import { Form } from 'semantic-ui-react';

const NewKegForm = () => {
  return (
    <Form>
      <Form.Group widths='equal'>
        <Form.Input label='Beer Name' name='name' placeholder='Beer Name' required />
        <Form.Input label='Brewery' name='brewery' placeholder='Post Title' required />
        <Form.Input label='Beer Style' name='style' placeholder='Beer Style' required />
        <Form.Input label='ABV' name='abv' placeholder='ABV' required />
        <Form.Input label='Pint Price' name='pint' placeholder='' required />
        <Form.Input label='Growler Price' name='growler' placeholder='' required />
        <Form.Input label='XL Growler Price' name='xlgrowler' placeholder='' required />
      </Form.Group>
      <Form.TextArea label='Beer Description' name='description' placeholder='Describe the beer color, flavor, history, etc... ' />
      <Form.Button color='blue'>Submit Beer</Form.Button>
    </Form>
  );
}

export default NewKegForm;
