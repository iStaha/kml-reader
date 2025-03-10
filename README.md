# KML Reader 📍

## Overview
This is a simple React application that allows users to **upload and visualize KML files** on a map. The app provides **summary and detailed insights** about the elements in the KML file.

## Features ✨
- **Upload KML File** 📂  
- **View Summary** 📝 (Count of different element types)  
- **View Details** 📊 (Element type and total length for LineStrings)  
- **Map Integration** 🗺️ (Displays parsed KML elements on a map)  

## Tech Stack 🛠️
- **React + Vite**
- **Material UI** (For styling)
- **Leaflet.js** (For map rendering)
- **@mapbox/togeojson** (For KML to GeoJSON conversion)
- **Vitest** (For testing)

## Installation 🏗️
1️⃣ Clone the repository  
```sh
git clone https://github.com/iStaha/kml-reader.git
cd kml-reader

npm install
npm run dev


📦 kml-reader
 ┣ 📂 src
 ┃ ┣ 📂 components
 ┃ ┃ ┣ 📜 FileUploader.jsx
 ┃ ┃ ┣ 📜 SummaryTable.jsx
 ┃ ┃ ┣ 📜 DetailedTable.jsx
 ┃ ┃ ┣ 📜 MapComponent.jsx
 ┃ ┣ 📂 tests
 ┃ ┃ ┣ 📜 FileUploader.test.jsx
 ┃ ┣ 📜 App.jsx
 ┃ ┣ 📜 main.jsx
 ┣ 📜 package.json
 ┣ 📜 README.md
 ┣ 📜 vite.config.js


Contributing 🤝
If you'd like to contribute:

Fork the repository 🍴
Create a new branch
Commit your changes 🔥
Push and submit a Pull Request ✅
License 📝
This project is open-source and free to use.
