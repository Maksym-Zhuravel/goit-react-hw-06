import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";
import { RiContactsFill } from "react-icons/ri";
import { FaPhone } from "react-icons/fa6";
import css from "../Contact/Contact.module.css";

export default function Contact({ contact: { name, number, id } }) {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <>
      <div className={css.box}>
        <RiContactsFill />
        <span className={css.item}>{name}</span>
      </div>
      <div className={css.box}>
        <FaPhone />
        <span className={css.item}>{number}</span>
      </div>
      <button type="button" className={css.btn} onClick={handleDelete}>
        delete
      </button>
    </>
  );
}
