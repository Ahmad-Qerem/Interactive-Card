import Image from "next/image";
import React from "react";
import Button from "../Button";
import checkMark from "@/assets/images/icon-complete.svg";

interface ThankYouProps {
  setShowThankYou: (val: boolean) => void;
}
const ThankYou: React.FC<ThankYouProps> = ({ setShowThankYou }) => {
  return (
    <div className="thank-you-wrapper">
      <div className="d-flex flex-column gap-3 justify-content-center align-items-center">
        <Image src={checkMark} width={70} height={70} alt="check mark" />
        <h1>Thank You</h1>
        <p className="text-muted">We've added your card details</p>
      </div>
      <Button className="btn btn-dark w-100 " onClick={() => setShowThankYou(false)}>Continue</Button>
    </div>
  );
};

export default ThankYou;
