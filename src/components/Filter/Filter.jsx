import { SearchLabel, SearchInput } from './FilterStyled';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/contacts/slice.js';
import { selectFilter } from '../../redux/contacts/selectors.js';

export const Filter = () => {
  const filterValue = useSelector(selectFilter);
  const dispatch = useDispatch();

  const filterContacts = event => {
    dispatch(setFilter(event.target.value));
  };
  return (
    <SearchLabel>
      Find contacts by name
      <SearchInput type="text" value={filterValue} onChange={filterContacts} />
    </SearchLabel>
  );
};
