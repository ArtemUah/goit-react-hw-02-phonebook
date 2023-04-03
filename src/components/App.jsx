import React, { Component } from "react";
import { nanoid } from 'nanoid';
import { ContactList } from "./ContactList";


export class App extends Component {
  state = {
    contacts: [],
    name: '',
  }
  
  handleOnChange = ({target: {name, value}}) => {
    this.setState({ [name]: value });
  }

  handleFormReset = (e) => {
    this.setState({
      name: '',
      number:'',
    })
      }
  handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(e)
    this.setState((prevState) => {
      return { contacts: [...prevState.contacts, { name: this.state.name, number: this.state.number, id: nanoid(), }] }
    });
    this.handleFormReset();
  }

  render() {
    return (
                 <div>
      <form onSubmit={this.handleOnSubmit}>
          <label >
            <input
              
  type="text"
  name="name"
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={this.handleOnChange}
              value={this.state.name}
        />
          </label>
           <label >
            <input
  type="tel"
  name="number"
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={this.handleOnChange}
              value={this.state.number}
/>
        </label>
                <button type='submit'>add contact</button>

        </form>
        <ContactList data={this.state.contacts} />
  </div>
   )
}  
}
