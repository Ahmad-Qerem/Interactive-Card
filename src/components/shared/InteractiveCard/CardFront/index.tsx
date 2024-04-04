import Image from "next/image";
import CardBackgroundFront from "../../../../assets/images/bg-card-front.png";
import { formatCardNumber } from "@/utils/string";

interface CardFrontProps {
  cardNumber: string;
  name: string;
  expiryDate: string;
}
export const CardFront: React.FC<CardFrontProps> = ({
  cardNumber,
  name,
  expiryDate,
}) => {
  const modifiedCardNumber = formatCardNumber(cardNumber);
  return (
    <div className="left-alignment">
      <div className="card-front">
        <div className="card-content">
          <div className="circles-wrapper">
            <div className="filled-circle" />
            <div className="outline-circle" />
          </div>

          <div className="card-data">
            <h3 className="card-number mb-3 fw-light">{modifiedCardNumber}</h3>
            <div className="d-flex justify-content-between text-uppercase fs-6 fw-lighter">
              <span>{name}</span>
              <span>{expiryDate.toString()}</span>
            </div>
          </div>
        </div>

        <Image src={CardBackgroundFront} alt="dark background" />
      </div>
    </div>
  );
};
