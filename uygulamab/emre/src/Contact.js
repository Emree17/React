import React, { Component } from 'react'
import List from './List';
import Form from './Form';

 class Contact extends Component {
  render() {
    return (
      <div>
        <List contact={this.props.contact}/>
        <Form/>
      </div>
    )
  }
}
export default Contact;