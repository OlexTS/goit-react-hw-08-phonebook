import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { deleteContact } from 'redux/contacts/operations';

import {
  Item,
  ContactName,
  ContactNumber,
  DeleteBtn,
} from './ContactItem.styled';

const ContactItem = ({ item: { name, phone, id } }) => {
  const dispatch = useDispatch();

  const handleDeleteContacts = () => {
    dispatch(deleteContact(id));
    toast.success('The contact is deleted from your book');
  };

  return (
    <Item>
      <ContactName>
        {name}:<ContactNumber>{phone}</ContactNumber>
      </ContactName>
      <DeleteBtn type="button" onClick={handleDeleteContacts}>
        Delete
      </DeleteBtn>
    </Item>
  );
};

ContactItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }),
};

export default ContactItem;
