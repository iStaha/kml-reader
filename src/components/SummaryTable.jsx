import React from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";

const SummaryTable = ({ geoJSON }) => {
  if (!geoJSON || !geoJSON.features) return null;

  const typeCounts = geoJSON.features.reduce((acc, feature) => {
    const type = feature.geometry.type;
    acc[type] = (acc[type] || 0) + 1;
    return acc;
  }, {});

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Element Type</TableCell>
            <TableCell>Count</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.entries(typeCounts).map(([type, count]) => (
            <TableRow key={type}>
              <TableCell>{type}</TableCell>
              <TableCell>{count}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default SummaryTable;
