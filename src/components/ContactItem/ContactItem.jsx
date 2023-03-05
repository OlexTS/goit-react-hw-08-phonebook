import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { deleteContact, editContact } from 'redux/contacts/operations';
import {
  Item,
  ContactName,
  ContactNumber,
  DeleteBtn,
} from './ContactItem.styled';

const ContactItem = ({ item: { name: nameValue, number: numberValue, id } }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [name, setName] = useState(nameValue);
  const [number, setNumber] = useState(numberValue);
  const dispatch = useDispatch();

  const handleDeleteContacts = () => {
    dispatch(deleteContact(id));
    toast.success('The contact is deleted from your book');
  };

  const handleEditMode = () => {
    if (isEdit) {
      setIsEdit(prev => !prev);
      console.log({id, name, number});
      dispatch(editContact({id, name, number}))
      return
    }
    setIsEdit(prev=>!prev)
    // dispatch(editContact(id));
    // toast.success('The contact was edit success')
  }
  
  const handleChange = (e) => {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value);
        return;
      case 'number':
        setNumber(e.target.value);
        return;
      default:
        return
    }
  }

  return (
    <Item>
      {isEdit?<input name='name' onChange={handleChange} type="text" value={name} />:<ContactName>
        {name}</ContactName> }:
      {isEdit?<input name='number' onChange={handleChange} type="text" value={number} />:<ContactNumber>
        {number}</ContactNumber> }
      <DeleteBtn type='button' onClick={handleEditMode}>{isEdit ? 'Save' : 'Edit'} </DeleteBtn>
      <DeleteBtn type="button" onClick={handleDeleteContacts} >
        Delete
      </DeleteBtn>
    </Item>
  );
};

ContactItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
};

export default ContactItem;
