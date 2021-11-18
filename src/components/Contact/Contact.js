import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import s from './Contact.module.css';
import { removeContactAction } from '../../redux/actions';

export default function Contact({ contact }) {
  const dispatch = useDispatch();

  const removeContact = contact => {
    dispatch(removeContactAction(contact.id));
  };
  return (
    <li className={s.item}>
      {contact.name}: {contact.number}{' '}
      <button onClick={() => removeContact(contact)}>Delete</button>
    </li>
  );
}

Contact.propTypes = {
  concact: PropTypes.string,
  deleteContact: PropTypes.func,
};
