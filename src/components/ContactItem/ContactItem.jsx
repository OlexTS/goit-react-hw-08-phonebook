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
  Info,
} from './ContactItem.styled';
// import {GrEdit} from "react-icons/gr";
import { FaSave, FaEdit, FaRegTrashAlt } from 'react-icons/fa';
const ContactItem = ({
  item: { name: nameValue, number: numberValue, _id },
}) => {
  const [isEdit, setIsEdit] = useState(false);
  const [name, setName] = useState(nameValue);
  const [number, setNumber] = useState(numberValue);
  const dispatch = useDispatch();

  const handleDeleteContacts = () => {
    dispatch(deleteContact(_id));
    toast.success('The contact successfully deleted from your book');
  };

  const handleEditMode = () => {
    if (isEdit) {
      setIsEdit(prev => !prev);
      dispatch(editContact(  {_id, name, number} ));
      toast.success('The contact successfully edited');
      return;
    }
    setIsEdit(prev => !prev);
    // dispatch(editContact(id));
    // toast.success('The contact was edit success')
  };

  const handleChange = e => {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value);
        return;
      case 'number':
        setNumber(e.target.value);
        return;
      default:
        return;
    }
  };

  return (
    <Item>
      <Info>
        {isEdit ? (
          <input name="name" onChange={handleChange} type="text" value={name} />
        ) : (
          <ContactName>{name}:</ContactName>
        )}

        {isEdit ? (
          <input
            name="number"
            onChange={handleChange}
            type="text"
            value={number}
          />
        ) : (
          <ContactNumber>{number}</ContactNumber>
        )}
      </Info>
      <div>
        <DeleteBtn type="button" onClick={handleEditMode}>
          {isEdit ? <FaSave size={16} /> : <FaEdit size={16} />}{' '}
        </DeleteBtn>
        <DeleteBtn type="button" onClick={handleDeleteContacts}>
          <FaRegTrashAlt size={16} />
        </DeleteBtn>
      </div>
    </Item>
  );
};

ContactItem.propTypes = {
  item: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
};

export default ContactItem;
