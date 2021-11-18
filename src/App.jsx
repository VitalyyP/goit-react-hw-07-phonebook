import s from './App.module.css';
import Form from './components/Form';
import Filter from './components/Filter';
import ContactList from './components/ContactList/ContactList';
import Container from './components/Container';

function App() {
  return (
    <Container>
      <h1>Phonebook</h1>
      <Form />
      <h2 className={s.contactsTitle}>Contacts</h2>
      <Filter />
      <ContactList />
    </Container>
  );
}

export default App;
