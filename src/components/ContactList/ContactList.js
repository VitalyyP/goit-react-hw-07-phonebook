import { useSelector } from 'react-redux';
import Contact from '../Contact';
import { useFetchContactsQuery } from '../../redux/slice';
import LoaderDots from '../Loader';

export default function ContactList() {
  const { filter } = useSelector(state => state.contacts);
  const { data, isFetching } = useFetchContactsQuery();
  // console.log(data.id);

  const getVisibleContacts = (allContacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    const visibleContacts = allContacts
      ? allContacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter))
      : [];
    return visibleContacts;
  };

  return (
    <ul>
      {getVisibleContacts(data, filter).map(contact => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </ul>
  );
}
