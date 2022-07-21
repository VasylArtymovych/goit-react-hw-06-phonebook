import { useSelector, useDispatch } from 'react-redux';
import { setfilter } from '../../redux';
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactLIst';
import Filter from 'components/Filter';
import { Box } from 'components/Box/Box';
import { Container, Title } from './App.styled';

const App = () => {
  const contacts = useSelector(state => state.contacts.items);
  const filterValue = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  const handleFilterInput = event => {
    const { value } = event.target;
    dispatch(setfilter(value));
  };

  const filterContacts = () => {
    if (contacts.length !== 0) {
      const normalizedFilter = filterValue.toLowerCase();
      return contacts.filter(({ name }) =>
        name.toLowerCase().includes(normalizedFilter)
      );
    }
    return [];
  };

  const filteredContacts = filterContacts();

  return (
    <Box display="flex" justifyContent="center">
      <Container>
        <Title>Phonebook</Title>
        <ContactForm />

        <Title>Contacts</Title>
        <Box display="flex" justifyContent="space-between">
          <Filter value={filterValue} onChange={handleFilterInput} />
          <h3>Total contacts: {filteredContacts.length}</h3>
        </Box>
        <ContactList contacts={filteredContacts} dispatch={dispatch} />
      </Container>
    </Box>
  );
};

export default App;
