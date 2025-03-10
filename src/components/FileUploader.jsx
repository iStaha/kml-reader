import React, { useState } from "react";
import { Button, Typography } from "@mui/material";
import * as toGeoJSON from "@mapbox/togeojson";

const FileUploader = ({ onFileUpload }) => {
  const [fileName, setFileName] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
      const reader = new FileReader();
      reader.onload = (e) => {
        const parser = new DOMParser();
        const xml = parser.parseFromString(e.target.result, "text/xml");
        const geoJSON = toGeoJSON.kml(xml);
        onFileUpload(geoJSON);
      };
      reader.readAsText(file);
    }
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <input type="file" accept=".kml" onChange={handleFileChange} hidden id="upload" />
      <label htmlFor="upload">
        <Button variant="contained" component="span">
          Upload KML File
        </Button>
      </label>
      {fileName && <Typography variant="body2">Uploaded: {fileName}</Typography>}
    </div>
  );
};

export default FileUploader;
