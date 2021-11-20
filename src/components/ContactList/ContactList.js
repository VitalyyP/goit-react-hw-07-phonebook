import { useSelector } from 'react-redux';
import Contact from '../Contact';
import { useFetchContactsQuery } from '../../redux/slice';
import LoaderDots from '../Loader';

export default function ContactList({ contacts }) {
  const { filter } = useSelector(state => state.contacts);
  const { data, isFetching } = useFetchContactsQuery();

  const getVisibleContacts = (allContacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    const visibleContacts = allContacts
      ? allContacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter))
      : [];
    return visibleContacts;
  };

  return (
    <ul>
      {getVisibleContacts(data, filter).map((contact, index) => (
        <div>
          {(index + 1).toString().padStart(3, '0')} <Contact key={contact.id} contact={contact} />
        </div>
      ))}
    </ul>
  );
}
