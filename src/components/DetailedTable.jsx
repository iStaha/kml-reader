import React from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";

const DetailedTable = ({ geoJSON }) => {
  if (!geoJSON || !geoJSON.features) return null;

  const calculateLength = (coordinates) => {
    let total = 0;
    for (let i = 0; i < coordinates.length - 1; i++) {
      const [lon1, lat1] = coordinates[i];
      const [lon2, lat2] = coordinates[i + 1];
      const dx = lon2 - lon1;
      const dy = lat2 - lat1;
      total += Math.sqrt(dx * dx + dy * dy);
    }
    return total.toFixed(2);
  };

  const details = geoJSON.features
    .filter((feature) => ["LineString", "MultiLineString"].includes(feature.geometry.type))
    .map((feature) => ({
      type: feature.geometry.type,
      length: calculateLength(feature.geometry.coordinates),
    }));

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Element Type</TableCell>
            <TableCell>Total Length</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {details.map((item, index) => (
            <TableRow key={index}>
              <TableCell>{item.type}</TableCell>
              <TableCell>{item.length} km</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DetailedTable;
