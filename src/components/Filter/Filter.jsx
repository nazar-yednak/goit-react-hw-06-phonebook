import { useDispatch } from 'react-redux';
import { filterOut } from '../../redux/myContact/slice';
import { Label, InputSearchContact } from './Filter.styled';
function Filter() {
  const dispatch = useDispatch();
  return (
    <>
      <Label>
        Find contacts by name
        <InputSearchContact
          type="text"
          onChange={e => dispatch(filterOut(e.target.value))}
        ></InputSearchContact>
      </Label>
    </>
  );
}

export default Filter;
