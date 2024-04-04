import Textfield from "@/components/shared/Textfield";
import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import "@testing-library/jest-dom";
import * as Yup from "yup";

import { Form, Formik } from "formik";

describe("Textfield testing", () => {
  it("Textfield rendering correctly ", () => {
    render(
      <Formik initialValues={{}} onSubmit={() => {}}>
        <Form>
          <Textfield label="Test" name="username" />
        </Form>
      </Formik>
    );
    const inputElement = screen.getByLabelText(/Test/i);
    expect(inputElement).toBeInTheDocument();
  });

  it("Textfield showing error", async () => {
    const errorMessage = "Username is required";
    render(
      <Formik
        initialValues={{ username: "" }}
        onSubmit={() => {}}
        validationSchema={Yup.object({
          username: Yup.string().required(errorMessage),
        })}
      >
        <Form>
          <Textfield label="username" name="username" />
        </Form>
      </Formik>
    );
    const inputElement = screen.getByLabelText(/username/i);
    await user.click(inputElement);
    await user.tab();
    const errorMessageElement = screen.getByText(/Username is required/i);
    expect(errorMessageElement).toBeInTheDocument();
  });
});
