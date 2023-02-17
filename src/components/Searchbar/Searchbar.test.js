import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../../App";
import Searchbar from "./Searchbar";

it("should render the searchbar", () => {
  render(<Searchbar />);

  const searchbar = screen.getByRole("textbox");

  expect(searchbar).toBeInTheDocument();
});

it("should load the correct card when there is a valid input", () => {
  render(<App />);

  const searchbar = screen.getByRole("textbox");

  const validCard = screen.getByRole("heading", { name: /Buzz/i });

  userEvent.type(searchbar, "Buzz");
  expect(validCard).toBeInTheDocument();
});

it("should not load a card when there is a non matching input", () => {
  render(<App />);

  const searchbar = screen.getByRole("textbox");
  const invalidCard = screen.getByRole("heading", {
    name: /Trashy Blonde/i,
  });

  userEvent.type(searchbar, "Buzz");

  expect(invalidCard).not.toBeInTheDocument();
});
