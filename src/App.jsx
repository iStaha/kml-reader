import React, { useState } from "react";
import { Container, Button, Typography, ButtonGroup, Box } from "@mui/material";
import FileUploader from "./components/FileUploader";
import SummaryTable from "./components/SummaryTable";
import DetailedTable from "./components/DetailedTable";
import MapComponent from "./components/MapComponent";

const App = () => {
  const [geoJSON, setGeoJSON] = useState(null);
  const [view, setView] = useState(null);

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        KML File Viewer
      </Typography>

      <FileUploader onFileUpload={setGeoJSON} />

      <Box sx={{ mt: 2, mb: 2 }}>
        <ButtonGroup variant="contained" disabled={!geoJSON}>
          <Button onClick={() => setView("summary")}>Summary</Button>
          <Button onClick={() => setView("detailed")}>Detailed</Button>
        </ButtonGroup>
      </Box>

      {view === "summary" && <SummaryTable geoJSON={geoJSON} />}
      {view === "detailed" && <DetailedTable geoJSON={geoJSON} />}

      <br/>

      <MapComponent geoJSON={geoJSON} />
    </Container>
  );
};

export default App;
