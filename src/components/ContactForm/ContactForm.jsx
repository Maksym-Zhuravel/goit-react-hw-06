import { Formik, Form, Field } from "formik";
import { nanoid } from "nanoid";
import { useId } from "react";

export default function ContactForm() {
  const id = useId();

  function handleSubmit({ name, number }, actions) {
    console.log({ id: nanoid(), name, number });
    actions.resetForm();
  }

  return (
    <Formik initialValues={{ name: "", number: "" }} onSubmit={handleSubmit}>
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
