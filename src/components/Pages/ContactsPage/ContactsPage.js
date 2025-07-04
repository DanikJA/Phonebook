import { ContactForm } from '../../ContactForm/ContactForm.jsx';
import { Filter } from '../../Filter/Filter.jsx';
import { PhoneBook } from '../../ContactList/PhoneBook.jsx';
import { selectContacts } from '../../../redux/contacts/selectors.js';
import { useSelector } from 'react-redux';

export const ContactsPage = () => {
  const contacts = useSelector(selectContacts);

  return (
    <div style={{ marginBottom: '50px' }}>
      <ContactForm />
      {contacts.length > 0 && <Filter />}
      <PhoneBook />
    </div>
  );
};
