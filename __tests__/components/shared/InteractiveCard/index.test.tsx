import InteractiveCard from "@/components/shared/InteractiveCard";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import user from "@testing-library/user-event";
describe("Interactive Card Testing", () => {
  it("Render correctly", () => {
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
    render(<InteractiveCard />);

    //find form part
    const inputField = screen.getByLabelText("Exp. Date (MM/YY)");
    const inputField2 = screen.getByTestId("text-field-expiryDateYY");
    expect(inputField2).toBeInTheDocument();
    expect(inputField).toBeInTheDocument();
    for (const item of items) {
      const element = screen.getByRole(item.type, {
        name: new RegExp(item.label, "i"),
      });
      expect(element).toBeInTheDocument();
    }

    //find cards part
    const cardNumber = screen.getByText(/1234 5678 9123 0000/i);
    const cardName = screen.getByText(/Ahmad Al Qerem/i);
    const cardDate = screen.getByText("00/00");
    const cvcTextElement = screen.getByText("000");
    expect(cardNumber).toBeInTheDocument();
    expect(cardName).toBeInTheDocument();
    expect(cardDate).toBeInTheDocument();
    expect(cvcTextElement).toBeInTheDocument();
  });

  it("Submit form and change the state correctly", async () => {
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
    render(<InteractiveCard />);
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
    
    const cardNumber = screen.getByText(/1234 5678 9123 0000/i);
    const cardName = screen.getByText(/Ahmad Al Qerem/i);
    const cardDate = screen.getByText("12/12");
    const cvcTextElement = screen.getByText("123");
    expect(cardNumber).toBeInTheDocument();
    expect(cardName).toBeInTheDocument();
    expect(cardDate).toBeInTheDocument();
    expect(cvcTextElement).toBeInTheDocument();
  });
});
