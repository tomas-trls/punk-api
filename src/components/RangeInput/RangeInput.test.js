import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../../App";
import RangeInput from "./RangeInput";

it("should render the sliders in the page", () => {
  render(<RangeInput />);
  const sliderHighAlcohol = screen.getByRole("slider", {
    name: /ABV > %/i,
  });
  const sliderYears = screen.getByRole("slider", {
    name: /Years </i,
  });
  const sliderAcidity = screen.getByRole("slider", {
    name: /Acidity < %/i,
  });

  expect(sliderHighAlcohol).toBeInTheDocument();
  expect(sliderYears).toBeInTheDocument();
  expect(sliderAcidity).toBeInTheDocument();
});

it("should render all the beers that have an alcohol volume over the value shown in the slider", () => {
  render(<App />);

  const sliderHighAlcohol = screen.getByRole("slider", {
    name: /ABV > 1%/i,
  });

  const card = screen.getByRole("heading", {
    name: /AB:12/i,
  });

  const invalidCard = screen.getByRole("heading", {
    name: /Buzz/i,
  });

  fireEvent.change(sliderHighAlcohol, { target: { value: 9 } });

  expect(card).toBeInTheDocument();
  expect(invalidCard).not.toBeInTheDocument();
});

it("should render all the beers that have been brewed before the year shown in the slider", () => {
  render(<App />);

  const sliderYears = screen.getByRole("slider", {
    name: /Years < 2010/i,
  });

  const validCard = screen.getByRole("heading", {
    name: /Buzz/i,
  });

  const invalidCard = screen.getByRole("heading", {
    name: /Pilsen Lager/i,
  });

  fireEvent.change(sliderYears, { target: { value: 2009 } });

  expect(validCard).toBeInTheDocument();
  expect(invalidCard).not.toBeInTheDocument();
});
