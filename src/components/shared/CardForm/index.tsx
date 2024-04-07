"use client";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import Button from "../Button";
import Textfield from "../Textfield";
import { constants } from "@/constants/languageConstants";
import { regExp } from "@/constants/regExp";
import { useState } from "react";
import ThankYou from "../ThankYou";

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
  const [showThankYou, setShowThankYou] = useState<Boolean>(false);
  return showThankYou ? (
    <ThankYou setShowThankYou={setShowThankYou} />
  ) : (
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
        setShowThankYou(true);
        resetForm();
      }}
    >
      <Form className="row p-3">
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

        <div className="d-flex justify-content-between gap-3">
          <div style={{ width: "100px" }}>
            <Textfield
              label="Exp. Date (MM/YY)"
              name="expiryDateMM"
              type="text"
              placeholder="MM"
            />
          </div>
          <div style={{ width: "100px" }}>
            <Textfield
              label=" "
              name="expiryDateYY"
              type="text"
              placeholder="YY"
            />
          </div>
          <Textfield
            label="CVC"
            name="CVC"
            type="text"
            placeholder="e.g. 123"
          />
        </div>
        <div>
          <Button type="submit" className="btn-dark w-100">
            Confirm
          </Button>
        </div>
      </Form>
    </Formik>
  );
};
