import Form from './Form/Form';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { Wrapper } from './App.styled';
// import useLocalStorage from '../hooks/useLocalStorage';

function App() {
  return (
    <Wrapper>
      <h2>Phonebook</h2>
      <Form />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </Wrapper>
  );
}

export default App;
