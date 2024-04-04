import { CardForm } from "@/components/shared/CardForm";
import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import "@testing-library/jest-dom";

describe("Form Testing", () => {
  it("render correctly", () => {
    const items = [
      {
        type: "textbox",
        label: "CardHolder Name",
      },
      {
        type: "textbox",
        label: "Card Number",
      },
      {
        type: "textbox",
        label: "CVC",
      },
      {
        type: "button",
        label: "Confirm",
      },
    ];
    render(<CardForm setCardValues={jest.fn()} />);
    const inputField = screen.getByLabelText("Exp. Date (MM/YY)");
    const inputField2 = screen.getByTestId("text-field-expiryDateYY");
    expect(inputField2).toBeInTheDocument();

    expect(inputField).toBeInTheDocument();
    items.forEach((item) => {
      const element = screen.getByRole(item.type, {
        name: new RegExp(item.label, "i"),
      });
      expect(element).toBeInTheDocument();
    });
  });

  it("Submitting with correct values ", async () => {
    const items = [
      {
        type: "textbox",
        label: "CardHolder Name",
        value: "Ahmad AL Qerem",
      },
      {
        type: "textbox",
        label: "Card Number",
        value: "1234567891230000",
      },
      {
        type: "textbox",
        label: "CVC",
        value: "123",
      },
    ];
    const mockedSubmitFunction = jest.fn();
    render(<CardForm setCardValues={mockedSubmitFunction} />);
    const inputField = screen.getByLabelText("Exp. Date (MM/YY)");
    const inputField2 = screen.getByTestId("text-field-expiryDateYY");
    await user.type(inputField, "12");
    await user.type(inputField2, "12");

    for (const item of items) {
      const element = screen.getByRole(item.type, {
        name: new RegExp(item.label, "i"),
      });
      await user.type(element, item.value);
    }
    const submitButton = screen.getByRole("button", { name: /Confirm/i });
    await user.click(submitButton);
    expect(mockedSubmitFunction).toHaveBeenCalledWith({
      CVC: "123",
      expiryDateYY: "12",
      expiryDateMM: "12",
      cardNumber: "1234567891230000",
      cardHolderName: "Ahmad AL Qerem",
    });
  });
});
