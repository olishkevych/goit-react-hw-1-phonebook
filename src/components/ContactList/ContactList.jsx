import styles from './ContactList.module.css';
import PropTypes from 'prop-types';

export const ContactList = ({ contacts, removeContact }) => {
  return (
    <ul>
      {contacts.map(contact => {
        return (
          <li className={styles.item} key={contact.key}>
            <span>{contact.name} </span>
            <span>{contact.number}</span>
            <button
              className={styles.removeBtn}
              onClick={() => removeContact(contact.key)}
            >
              &times;
            </button>
          </li>
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  removeContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.number.isRequired,
      key: PropTypes.string.isRequired,
    })
  ),
};
