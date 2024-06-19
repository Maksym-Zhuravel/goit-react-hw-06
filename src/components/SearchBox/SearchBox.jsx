import { useDispatch, useSelector } from "react-redux";
import { filterContacs } from "../../redux/filtersSlice";

export default function SearchBox() {
  const filter = useSelector((state) => state.filters.name);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(filterContacs(e.target.value));
  };

  return (
    <>
      <p>Find contacts by name</p>
      <input type="text" value={filter} onChange={handleChange} />
    </>
  );
}
