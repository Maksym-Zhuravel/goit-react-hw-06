import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

export default function Contact({ contact: { name, number, id } }) {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <>
      <span>{name}</span>
      <span>{number}</span>
      <button type="button" onClick={handleDelete}>
        delete
      </button>
    </>
  );
}
