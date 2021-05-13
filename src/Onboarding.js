import React, { Component } from "react";
import { Form, Col, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';


class Onboarding extends Component {
    constructor(props) {
        super(props);

    }

    onChangeColor(event) {
        console.log(event.target.value);
    }

    onFormSubmit(event) {
        event.preventDefault();
        //console.log("Color value is :", this.state.color);
    }
    render() {
        return (
            <div>
               <Form onSubmit={this.onFormSubmit.bind(this)} role="form">
          <Form.Group controlId="exampleForm.SelectCustom">
            <Form.Label>Select Color : </Form.Label>
            <Form.Control as="select" custom onChange={this.onChangeColor.bind(this)}>
              <option value="red">Red</option>
              <option value="blue">Blue</option>
              <option value="green">Green</option>
              <option value="black">Black</option>
              <option value="orange">Orange</option>
            </Form.Control>
          </Form.Group>
          <Button type="submit">Submit form</Button>
        </Form>
            </div>
        );
    }

}
export default Onboarding;