import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';

import styled from '@emotion/styled';

const Container = styled.div`
  padding: 50px;
  display: flex;
  justify-content: space-around;
`;

const Section = styled.div`
  padding-top: 20px;
`;
const Title = styled.h1`
  color: #960909;
`;

const ContactsPage = () => {
  return (
    <Section>
      <Title>Contacts</Title>
      <Container>
        <div>
          <h2>Add contacts</h2>
          <ContactForm />
          <Filter />
        </div>

        <div>
          <h2>Contacts List</h2>
          <ContactList />
        </div>
      </Container>
    </Section>
  );
};

export default ContactsPage;
