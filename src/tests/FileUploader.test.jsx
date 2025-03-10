import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FileUploader from "../components/FileUploader";
import "@testing-library/jest-dom";

test("renders file uploader and selects a file", async () => {
  render(<FileUploader onFileUpload={vi.fn()} />);


  // Get the hidden file input
  const fileInput = screen.getByLabelText(/Upload KML File/i);
  expect(fileInput).toBeInTheDocument(); // ✅ Ensure the input is present

  // Simulate file selection
  const testFile = new File(["test"], "test.kml", { type: "application/vnd.google-earth.kml+xml" });
  await userEvent.upload(fileInput, testFile);

  // Check if the uploaded file name is displayed
  expect(await screen.findByText(/Uploaded: test.kml/i)).toBeInTheDocument();
});
