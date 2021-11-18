import { useSelector } from 'react-redux';
import Contact from '../Contact';

export default function ContactList() {
  const { items, filter } = useSelector(state => state.contacts);

  const getVisibleContacts = (allContacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    const visibleContacts = allContacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
    return visibleContacts;
  };

  return (
    <ul>
      {getVisibleContacts(items, filter).map(contact => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </ul>
  );
}
