import React from "react";
import {Form, } from "semantic-ui-react";

class ActorForm extends React.Component{
  state = {name:"", phone:"",};
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addActor(this.state);
    this.setState({ firstName: "", phone: "", })
     // Call a function to add a Actor to state
    // Where should this function be defined???
  };
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value, })
  };
  render(){
    const {firstName, phone,} = this.state
    return(
      <Form onSubmit={this.handleSubmit}>
          <Form.Input
          fluid
          label="Name"
          placeHolder="Name"
          name="firstName"
          value={firstName}
          onChange={this.handleChange}
          />
          <Form.Input
          fluid
          label="Phone"
          placeHolder="Phone"
          name="phone"
          value={phone}
          onChange={this.handleChange}
          />
          <Form.Button>Submit</Form.Button>
      </Form>
    );
  };
};
export default ActorForm;