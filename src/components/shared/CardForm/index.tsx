"use client";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import Button from "../Button";
import Textfield from "../Textfield";
import { constants } from "@/constants/languageConstants";
import { regExp } from "@/constants/regExp";

interface CardFormProps {
  setCardValues: (values: {
    cardHolderName: string;
    cardNumber: string;
    CVC: string;
    expiryDateMM: string;
    expiryDateYY: string;
  }) => void;
}

export const CardForm: React.FC<CardFormProps> = ({ setCardValues }) => {
  return (
    <Formik
      initialValues={{
        cardHolderName: "",
        cardNumber: "",
        expiryDateMM: "",
        expiryDateYY: "",
        CVC: "",
      }}
      validationSchema={Yup.object({
        cardHolderName: Yup.string().required(constants.pleaseEnterYourName),
        cardNumber: Yup.string()
          .required(constants.pleaseEnterCardNumber)
          .matches(regExp.numbersOnly),
        expiryDateMM: Yup.string().required(constants.cantBeBlank),
        expiryDateYY: Yup.string().required(constants.cantBeBlank),
        CVC: Yup.string()
          .required(constants.cantBeBlank)
          .matches(regExp.numbersOnly),
      })}
      onSubmit={async (values, { resetForm }) => {
        setCardValues(values);
        resetForm();
      }}
    >
      <Form className="row m-5 p-5">
        <div className="col-12">
          <Textfield
            label="CardHolder Name"
            name="cardHolderName"
            type="text"
            placeholder="e.g. Ahmad AL Qerem"
          />
        </div>
        <div className="col-12">
          <Textfield
            label="Card Number"
            name="cardNumber"
            type="text"
            placeholder="e.g. 1234 5678 9123 0000"
          />
        </div>

        <div className="row">
          <div className="col-3">
            <Textfield
              label="Exp. Date (MM/YY)"
              name="expiryDateMM"
              type="text"
              placeholder="MM"
            />
          </div>
          <div className="col-3">
            <Textfield
              label=" "
              name="expiryDateYY"
              type="text"
              placeholder="YY"
            />
          </div>
          <div className="col-6">
            <Textfield
              label="CVC"
              name="CVC"
              type="text"
              placeholder="e.g. 123"
            />
          </div>
        </div>
        <Button
          type="submit"
          style={{ margin: "0 12px" }}
          className="btn-dark w-100"
        >
          Confirm
        </Button>
      </Form>
    </Formik>
  );
};
