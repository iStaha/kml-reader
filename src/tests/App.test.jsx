import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import App from "../App";

test("disables Summary and Detailed buttons when no file is uploaded", () => {
  render(<App />);
  expect(screen.getByText(/Summary/i)).toBeDisabled();
  expect(screen.getByText(/Detailed/i)).toBeDisabled();
});
