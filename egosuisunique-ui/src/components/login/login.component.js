import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import "./login.style.scss";
import { signInwithGoogle } from '../../firebase/firebase.utils';

export default class login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleChange = (event) => {
    const target = event.target;
    const field = target.name;
    const value = target.value;
    this.setState({
      [field]: value,
    });
  };

  render() {
    return (
      <div id="login">
        <Form id="form">
        <Row>
          <Col></Col>
          <Col>
            <Form.Group controlId="formBasicEmail" class="inputs">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" name="email" onChange ={this.handleChange}/>
            </Form.Group>
          </Col>
          <Col></Col>
        </Row>
        <Row>
          <Col></Col>
          <Col>
            <Form.Group controlId="formBasicPassword"  class="inputs">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" name="password" placeholder="Password" />
            </Form.Group>
          </Col>
          <Col></Col>
        </Row>
        <Row>
          <Col></Col>
          <Col>
            <Row>
            <Col></Col>
            <Col>
            <Button variant="primary" id="button" type="submit">
              Submit
            </Button></Col>
            <Col>
            <Button variant="primary" id="button" onClick={signInwithGoogle}>
              Sign in with Google
            </Button></Col>
            <Col></Col>
            </Row>
          </Col>
          <Col></Col>
        </Row>
      </Form>
      </div>
    );
  }
}
