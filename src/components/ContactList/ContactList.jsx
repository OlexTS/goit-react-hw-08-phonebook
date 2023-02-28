import ContactItem from 'components/ContactItem';
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from 'redux/selectors';
import { Text } from './ContactList.styled';
const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);

  if (contacts.length === 0) {
    return <Text>There are no contacts here</Text>;
  }
  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          <ContactItem item={contact} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
