import Image from "next/image";
import CardBackgroundBack from "../../../../assets/images/bg-card-back.png";

interface CardBackProps {
  CVC: string;
}

export const CardBack: React.FC<CardBackProps> = ({ CVC = "000" }) => {
  return (
    <div className="card-back right-alignment ">
      <span className="cvc-text fw-light ">{CVC}</span>
      <Image src={CardBackgroundBack} alt="card background back side" />
    </div>
  );
};
