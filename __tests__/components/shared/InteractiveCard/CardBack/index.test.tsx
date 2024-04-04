import { CardBack } from "@/components/shared/InteractiveCard/CardBack";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("CardBack Testing", () => {
  it("Render correctly", () => {
    render(<CardBack CVC="123" />);
    const cvcTextElement = screen.getByText("123");
    const cardBackElement = screen.getByAltText("card background back side");

    expect(cvcTextElement).toBeInTheDocument();
    expect(cardBackElement).toBeInTheDocument();
  });

  it("On props change must render with the correct value", () => {
    const { rerender } = render(<CardBack CVC="123" />);
    const cvcTextElement = screen.getByText("123");
    expect(cvcTextElement).toBeInTheDocument();
    rerender(<CardBack CVC="456" />);
    const updatedCvcTextElement = screen.getByText("456");
    expect(updatedCvcTextElement).toBeInTheDocument();
  });
});
