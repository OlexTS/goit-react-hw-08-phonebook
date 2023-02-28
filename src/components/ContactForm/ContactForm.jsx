import { Formik, ErrorMessage } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addContact } from 'redux/operations';
import { selectContacts } from 'redux/selectors';

import * as Yup from 'yup';
import 'yup-phone';

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

const schema = Yup.object().shape({
  name: Yup.string()
    .required()
    .min(5)
    .max(24)
    .matches(
      "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
      'Please enter correct name'
    ),
  phone: Yup.string().phone('UA').required(),
});

const initialValues = {
  name: '',
  phone: '',
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
      validationSchema={schema}
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
          <Input type="tel" name="phone" placeholder="8-000-000-00-00" />
          <FormError name="phone" />
        </Label>
        <SubmitButton type="submit">Add contact</SubmitButton>
      </FormCont>
    </Formik>
  );
};

export default ContactForm;
