import ContactItem from 'components/ContactItem';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilteredContacts } from 'redux/contacts/selectors';
import { Text, List } from './ContactList.styled';
import { fetchContacts } from 'redux/contacts/operations';

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  if (contacts.length === 0) {
    return <Text>There are no contacts here</Text>;
  }
  return (
    <List>
      {contacts.map(contact => (
        <li key={contact.id}>
          <ContactItem item={contact} />
        </li>
      ))}
    </List>
  );
};

export default ContactList;
