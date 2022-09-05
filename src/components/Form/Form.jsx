import { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import shortid from 'shortid';
import { FormPhonebook, FormInput, FormButton } from './Form.styled';
import { addContact, getContacts } from '../../redux/myContact/slice';
function Form() {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleSubmit = event => {
    event.preventDefault();
    const name = event.target.name.value;
    const number = event.target.number.value;

    const existingContact = contacts.find(contact => name === contact.name);

    if (existingContact) {
      return alert(`${name} is already in contacts`);
    } else {
      const contact = {
        id: shortid.generate(),
        name,
        number,
      };
      dispatch(addContact(contact));
    }

    event.target.reset();
  };
  return (
    <div>
      <FormPhonebook onSubmit={handleSubmit}>
        <label>Name</label>
        <FormInput
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <label>Number</label>
        <FormInput
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <FormButton type="submit"> add contact</FormButton>
      </FormPhonebook>
    </div>
  );
}

export default memo(Form);
