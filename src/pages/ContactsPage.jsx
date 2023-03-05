// import Helmet from 'react-helmet';
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';

import styled from '@emotion/styled';

 const Container = styled.div`
  display: block;
  text-align: center;
  margin: 40px auto;
  max-width: 400px;
  padding: 30px;
  border: 2px solid black;
  border-radius: 30px;
  background: linear-gradient(to right, #c7c7e6, #9b646c);
  box-shadow: 8px 8px 20px 12px rgba(41, 38, 38, 0.2);
`;

const ContactsPage = () => {
  
  return (
    <Container>
      {/* <Helmet>
        <title>Contacts</title>
      </Helmet> */}
      <ContactForm />
      <h1>Contacts</h1>
      <Filter />
      <ContactList/>
    </Container>
  );
};

export default ContactsPage;
