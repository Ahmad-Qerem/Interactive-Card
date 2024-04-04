import Button from "@/components/shared/Button";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

describe("Button testing", () => {
  it("The component rendering correctly", () => {
    render(<Button onClick={jest.fn()}>Test</Button>);
    const btnElement = screen.getByRole("button", { name: "Test" });
    expect(btnElement).toBeInTheDocument();
  });

  it("Button handler function called on click", async () => {
    const mockedFunction = jest.fn();
    render(<Button onClick={mockedFunction}>Test</Button>);
    const button = screen.getByRole("button", { name: /Test/i });
    await userEvent.click(button);
    expect(mockedFunction).toHaveBeenCalledTimes(1);
  });

  it("Disable button when disabled flag is active", () => {
    const mockedFunction = jest.fn();
    render(
      <Button onClick={mockedFunction} disabled>
        Test
      </Button>
    );
    const button = screen.getByRole("button", { name: /Test/i });
    expect(button).toBeDisabled();
  });
});
