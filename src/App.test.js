import { render, screen } from "@testing-library/react";
import App from "./App";

global.IS_REACT_ACT_ENVIRONMENT = false;

test("renders learn react link", async () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
  await new Promise((resolve) => setTimeout(resolve, 100));
});
