import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the app", () => {
  render(<App />);
  const header = screen.getByRole("heading", { name: /🎸 punk api 🍻/i });
  expect(header).toBeInTheDocument();
});
