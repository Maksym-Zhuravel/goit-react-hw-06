import { Formik, Form, Field, ErrorMessage } from "formik";
import css from "../ContactForm/ContactForm.module.css";
import { nanoid } from "nanoid";
import * as Yup from "yup";
import { useId } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";

export default function ContactForm() {
  const id = useId();
  const dispatch = useDispatch();

  function handleAddContact(values, actions) {
    values.id = nanoid();
    dispatch(addContact(values));
    actions.resetForm();
  }

  const ContactsSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too short!")
      .max(50, "Too long!")
      .required("Required"),
    number: Yup.string()
      .min(3, "Too short!")
      .max(50, "Too long!")
      .required("Required"),
  });

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      onSubmit={handleAddContact}
      validationSchema={ContactsSchema}
    >
      <Form className={css.form}>
        <div className={css.box}>
          <label htmlFor={id + "-name"}>Name</label>
          <Field id={id + "-name"} type="text" name="name" />
          <ErrorMessage className={css.error} name="name" component="span" />
        </div>
        <div className={css.box}>
          <label htmlFor={id + "-number"}>Number</label>
          <Field id={id + "-number"} type="number" name="number" />
          <ErrorMessage className={css.error} name="number" component="span" />
        </div>
        <button type="submit" className={css.btn}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
