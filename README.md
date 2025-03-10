KML File Viewer

This is a React-based application built using Vite and Material-UI. The app allows users to upload a KML file, parse its contents, display a summary and detailed analysis, and render the elements on a map.

🚀 Features

Upload and parse KML files

Display a summary of different element types

Show detailed information about line-based elements

Render KML elements on an interactive map using Leaflet

🛠 Tech Stack

Frontend: React (Vite), Material-UI

Mapping: Leaflet.js

Testing: Vitest, React Testing Library

📂 Folder Structure

├── src
│   ├── components
│   │   ├── FileUploader.jsx
│   │   ├── SummaryTable.jsx
│   │   ├── DetailedTable.jsx
│   │   ├── MapComponent.jsx
│   ├── tests
│   │   ├── FileUploader.test.jsx
│   ├── App.jsx
│   ├── main.jsx
│   ├── styles.css
├── public
│   ├── index.html
├── package.json
├── vite.config.js
├── README.md

📦 Installation

Clone the repository:

git clone https://github.com/your-username/kml-file-viewer.git
cd kml-file-viewer

Install dependencies:

npm install

Start the development server:

npm run dev

✅ Running Tests

Run unit tests with Vitest:

npx vitest

🚀 Build for Production

To create a production build:

npm run build

📝 License

This project is licensed under the MIT License.

