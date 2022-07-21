import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
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

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactListItem;
