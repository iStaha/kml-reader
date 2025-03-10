import React, { useEffect } from "react";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const MapComponent = ({ geoJSON }) => {
  if (!geoJSON) return <p style={{ textAlign: "center" }}>Upload a KML file to view the map.</p>;

  return (
    <MapContainer center={[51.505, -0.09]} zoom={5} style={{ height: "500px", width: "100%" }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {geoJSON && <GeoJSON key={JSON.stringify(geoJSON)} data={geoJSON} />}
    </MapContainer>
  );
};

export default MapComponent;
