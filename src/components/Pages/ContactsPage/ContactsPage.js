import { ContactForm } from '../../ContactForm/ContactForm.jsx';
import { Filter } from '../../Filter/Filter.jsx';
import { PhoneBook } from '../../ContactList/PhoneBook.jsx';

export const ContactsPage = () => {
  return (
    <div style={{ marginBottom: '50px' }}>
      <ContactForm />
      <Filter />
      <PhoneBook />
    </div>
  );
};
