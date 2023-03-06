import { Formik, ErrorMessage } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';
import { contactsSchema } from 'helpers/validation';
import {
  Input,
  FormCont,
  Label,
  SubmitButton,
  Text,
  ErrorText,
} from './ContactForm.styled';

const FormError = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={message => <ErrorText>{message}</ErrorText>}
    />
  );
};

const initialValues = {
  name: '',
  number: '',
};
const ContactForm = () => {
  const dispatch = useDispatch();
  const allContacts = useSelector(selectContacts);

  const handleSubmit = (values, { resetForm }) => {
    if (allContacts.some(item => item.name === values.name)) {
      toast.error(`${values.name} is already in contacts.`);
      return;
    }
    dispatch(addContact(values));

    resetForm();
    toast.success('The contact is added to your book');
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={contactsSchema}
      onSubmit={handleSubmit}
    >
      <FormCont autoComplete="off">
        <Label>
          <Text>Name</Text>
          <Input type="text" name="name" placeholder="Jack Daniel" />
          <FormError name="name" />
        </Label>
        <Label>
          <Text>Phone</Text>
          <Input type="tel" name="number" placeholder="8-000-000-00-00" />
          <FormError name="number" />
        </Label>
        <SubmitButton type="submit">Add contact</SubmitButton>
      </FormCont>
    </Formik>
  );
};

export default ContactForm;
