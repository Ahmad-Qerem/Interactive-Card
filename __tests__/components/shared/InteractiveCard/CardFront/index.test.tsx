import { CardFront } from "@/components/shared/InteractiveCard/CardFront";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("CardFront Testing", () => {
  it("Render correctly", () => {
    const props = {
      cardNumber: "1234123412341234",
      expiryDate: "07/26",
      name: "Ahmad AL Qerem",
    };
    render(<CardFront {...props} />);
    const cardNumber = screen.getByText(/1234 1234 1234 1234/i);
    const cardName = screen.getByText(/Ahmad AL Qerem/i);
    const cardDate = screen.getByText("07/26");
    expect(cardNumber).toBeInTheDocument();
    expect(cardName).toBeInTheDocument();
    expect(cardDate).toBeInTheDocument();
  });

  it("On props change must render with the correct value", () => {
    const props = {
      cardNumber: "1234123412341234",
      expiryDate: "07/26",
      name: "Ahmad AL Qerem",
    };
    const { rerender } = render(<CardFront {...props} />);
    const cardNumber = screen.getByText(/1234 1234 1234 1234/i);
    const cardName = screen.getByText(/Ahmad AL Qerem/i);
    const cardDate = screen.getByText("07/26");
    expect(cardNumber).toBeInTheDocument();
    expect(cardName).toBeInTheDocument();
    expect(cardDate).toBeInTheDocument();
    const props2 = {
      cardNumber: "1234123412340000",
      expiryDate: "08/28",
      name: "Ahmad AL Qerem testing",
    };
    rerender(<CardFront {...props2} />);
    const cardNumber2 = screen.getByText(/1234 1234 1234 000/i);
    const cardName2 = screen.getByText(/Ahmad AL Qerem testing/i);
    const cardDate2 = screen.getByText("08/28");
    expect(cardNumber2).toBeInTheDocument();
    expect(cardName2).toBeInTheDocument();
    expect(cardDate2).toBeInTheDocument();
  });
});
