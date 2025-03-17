import { useEffect } from 'react';
import { ContactItem } from '../ContactItem/ContactItem';
import { ClipLoader } from 'react-spinners';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts } from '../../redux/contacts/asyncFunctions';
import {
  selectFilter,
  selectContacts,
  selectIsLoading,
} from '../../redux/contacts/selectors.js';
import {
  ContactListContainer,
  ContactListHeading,
  ContactList,
} from './ContactListStyled.jsx';

export const PhoneBook = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  console.log('Added contact', contacts);
  const filterValue = useSelector(selectFilter);
  const isLoadingContacts = useSelector(selectIsLoading);

  useEffect(() => {
    if (contacts.length === 0) {
      dispatch(fetchContacts());
    }
  }, [dispatch, contacts.length]);

  console.log(contacts);

  if (isLoadingContacts) {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '70px',
        }}
      >
        <ClipLoader color="rgb(100, 199, 122)" size={50}></ClipLoader>
      </div>
    );
  }
  const filteredContacts = contacts.filter(
    contact =>
      (contact.name &&
        contact.name.toLowerCase().includes(filterValue.toLowerCase())) ||
      (contact.number && contact.number.includes(filterValue))
  );

  return (
    <ContactListContainer>
      <ContactListHeading>Contacts:</ContactListHeading>
      <ContactList>
        {filteredContacts.map(contact => (
          <ContactItem
            key={contact.id}
            id={contact.id}
            name={contact.name}
            number={contact.number}
          />
        ))}
      </ContactList>
    </ContactListContainer>
  );
};
