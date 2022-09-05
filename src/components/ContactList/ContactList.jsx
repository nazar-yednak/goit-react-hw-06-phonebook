import { useSelector, useDispatch } from 'react-redux';
import {
  getContacts,
  getFilters,
  removeContact,
} from '../../redux/myContact/slice';
import {
  ContactList,
  DeleteButton,
  ContactItem,
  ContastText,
} from './ContactList.styled';

function Contact() {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilters);
  const normalizeFilter = filter.toLowerCase();
  const visibleContacts = contacts?.filter(contact =>
    contact?.name?.toLowerCase().includes(normalizeFilter)
  );

  return (
    <ContactList>
      {visibleContacts &&
        visibleContacts?.map(({ id, name, number }) => (
          <ContactItem key={id}>
            <ContastText>
              {name}: {number}
            </ContastText>
            <DeleteButton
              type="text"
              onClick={() => dispatch(removeContact(id))}
            >
              Delete
            </DeleteButton>
          </ContactItem>
        ))}
      {visibleContacts.length === 0 && <p>No contacts</p>}
    </ContactList>
  );
}

export default Contact;
