import { useState } from 'react';
import s from './Form.module.css';
import { useFetchContactsQuery, useAddContactMutation } from '../../redux/slice';

export default function Form() {
  const [addContactToBase, { isLoading }] = useAddContactMutation();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const { data } = useFetchContactsQuery();

  const addContact = obj => {
    if (data.some(contact => contact.name.toLowerCase() === obj.name.toLowerCase())) {
      alert(`You have already had ${obj.name} in your contacts`);
      return;
    }

    addContactToBase(obj);
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
    addContact({ name: name, phone: number });
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
            pattern="^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$"
            onChange={handleInputChange}
            required
          />
        </label>
        <button type="submit" className={s.button} disabled={isLoading}>
          Add contact
        </button>
      </form>
    </>
  );
}
