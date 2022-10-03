import { Box } from './Box/Box';
import { Component } from 'react';
import { Form } from './Form/Form';
import { Filter } from './Form/Filter';
import { ContactList } from './Form/ContactList';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  handleSubmit = ({ id, name, number }) => {
    const contact = {
      id,
      name,
      number,
    };

    const contactNames = [];

    this.state.contacts.map(stateContact =>
      contactNames.push(stateContact.name)
    );

    if (!contactNames.includes(contact.name)) {
      this.setState(prevState => ({
        contacts: [contact, ...prevState.contacts],
      }));
    } else {
      alert(contact.name + ' is already in contacts.');
    }
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const visibleContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
    return (
      <Box>
        <h1>Phonebook</h1>
        <Form onSubmit={this.handleSubmit}></Form>
        <h2>Contacts</h2>
        <Filter value={this.state.filter} onChange={this.changeFilter}></Filter>
        <ContactList
          data={visibleContacts}
          onClick={this.deleteContact}
        ></ContactList>
      </Box>
    );
  }
}
