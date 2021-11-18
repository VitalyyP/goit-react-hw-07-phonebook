import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import s from './Form.module.css';
import { addContactAction } from '../../redux/actions';

export default function Form() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);

  const addContact = data => {
    if (contacts.some(contact => contact.name.toLowerCase() === data.name.toLowerCase())) {
      alert(`You have already had ${data.name} in your contacts`);
      return;
    }
    const contact = {
      id: Date.now(),
      name: data.name,
      number: data.number,
    };
    dispatch(addContactAction(contact));
  };

  const handleInputChange = event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
    }
  };

  const handleSubmite = event => {
    event.preventDefault();
    addContact({ name: name, number: number });
    setName('');
    setNumber('');
  };

  return (
    <>
      <form onSubmit={handleSubmite}>
        <label>
          <p>Name</p>
          <input
            type="text"
            value={name}
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            required
            onChange={handleInputChange}
          />
        </label>
        <label>
          <p>Number</p>
          <input
            type="tel"
            value={number}
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            onChange={handleInputChange}
            required
          />
        </label>
        <button type="submit" className={s.button}>
          Add contact
        </button>
      </form>
    </>
  );
}
