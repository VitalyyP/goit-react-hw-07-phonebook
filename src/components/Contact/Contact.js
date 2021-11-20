import PropTypes from 'prop-types';
import s from './Contact.module.css';

import { useDeleteContactMutation } from '../../redux/slice';

export default function Contact({ contact }) {
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();

  return (
    <li className={s.item}>
      . {contact.name}: <span style={{ textAlign: 'right' }}>{contact.phone}</span>{' '}
      <button onClick={() => deleteContact(contact.id)} disabled={isDeleting}>
        Delete
      </button>
    </li>
  );
}

Contact.propTypes = {
  concact: PropTypes.string,
};
