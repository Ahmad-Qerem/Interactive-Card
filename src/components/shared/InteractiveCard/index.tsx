"use client";
import Image from "next/image";
import BackGroundImage from "../../../assets/images/bg-main-desktop.png";
import { CardFront } from "./CardFront";
import { CardBack } from "./CardBack";
import { CardForm } from "../CardForm";
import { useState } from "react";
const InteractiveCard = () => {
  const currentDate = new Date();
  const [cardValues, setCardValues] = useState({
    CVC: "000",
    cardHolderName: "Ahmad Al Qerem",
    cardNumber: "1234567891230000",
    expiryDateMM: "00",
    expiryDateYY: "00",
  });
  return (
    <div className="interactive-card">
      <div className="card-part">
        <Image
          src={BackGroundImage}
          style={{ height: "100vh" }}
          alt="dark background"
        />
        <div className="cards-container">
          <CardFront
            cardNumber={cardValues.cardNumber}
            name={cardValues.cardHolderName}
            expiryDate={cardValues.expiryDateMM + "/" + cardValues.expiryDateYY}
          />
          <CardBack CVC={cardValues.CVC} />
        </div>
      </div>
      <div className="form-part">
        <CardForm setCardValues={setCardValues} />
      </div>
    </div>
  );
};

export default InteractiveCard;
