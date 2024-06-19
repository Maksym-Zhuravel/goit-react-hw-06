import { Formik, Form, Field } from "formik";
import { nanoid } from "nanoid";
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

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      onSubmit={handleAddContact}
    >
      <Form>
        <label htmlFor={id + "-name"}>Name</label>
        <Field id={id + "-name"} type="text" name="name" />
        <label htmlFor={id + "-number"}>Number</label>
        <Field id={id + "-number"} type="number" name="number" />
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}
