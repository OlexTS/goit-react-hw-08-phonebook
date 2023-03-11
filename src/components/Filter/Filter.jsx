import { Label, Input, InputContainer, Text } from './Filter.styled';
import { setFilter } from 'redux/contacts/filterSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/contacts/selectors';

const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(selectFilter);
  return (
    <Label>
      <Text>Find contacts by name</Text>
      <InputContainer>
        <Input
          type="text"
          value={value}
          onChange={e => dispatch(setFilter(e.target.value))}
        />
      </InputContainer>
    </Label>
  );
};

export default Filter;
