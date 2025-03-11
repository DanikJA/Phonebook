import { ContactForm } from '../ContactForm/ContactForm.jsx';
import { Filter } from '../Filter/Filter.jsx';
import { ContactListComponent } from '../ContactList/ContactList.jsx';

export const ContactPage = () => {
  return (
    <div style={{ marginBottom: '50px' }}>
      <ContactForm />
      <Filter />
      <ContactListComponent />
    </div>
  );
};
