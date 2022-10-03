import { Box } from './Box/Box';
import shortid from 'shortid';
import { Component } from 'react';
import { Form } from './Form/Form';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
  };

  handleSubmit = name => {
    const contact = {
      name,
    };
    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
    console.log(this.state.contacts);
  };
  render() {
    return (
      <Box>
        <Form onSubmit={this.handleSubmit}></Form>
        {this.state.contacts.map(contact => {
          return <div key={shortid.generate()}>{contact.name}</div>;
        })}
      </Box>
    );
  }
}
