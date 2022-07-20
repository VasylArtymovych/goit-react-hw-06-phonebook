import { useDispatch } from 'react-redux';
import { Item, Button } from './ContactListItem.styled';
import { deleteContact } from '../../redux';

const ContactListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  return (
    <Item>
      {name}: {number}
      <Button
        onClick={() => {
          dispatch(deleteContact(id));
        }}
      >
        Delete
      </Button>
    </Item>
  );
};

export default ContactListItem;
