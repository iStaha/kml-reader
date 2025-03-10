// kmlParser.js
export const getSummary = (geoJsonData) => {
    if (!geoJsonData || !geoJsonData.features) return {};
  
    const counts = {};
    geoJsonData.features.forEach((feature) => {
      const type = feature.geometry?.type;
      if (type) counts[type] = (counts[type] || 0) + 1;
    });
  
    return counts;
  };
  
  export const getDetailedInfo = (geoJsonData) => {
    if (!geoJsonData || !geoJsonData.features) return {};
  
    const details = {};
    geoJsonData.features.forEach((feature) => {
      const type = feature.geometry?.type;
      if (type && type.includes("Line")) {
        const length = getLength(feature.geometry.coordinates);
        details[type] = (details[type] || 0) + length;
      }
    });
  
    return details;
  };
  
  const getLength = (coordinates) => {
    if (!Array.isArray(coordinates) || coordinates.length < 2) return 0;
  
    let totalLength = 0;
    for (let i = 1; i < coordinates.length; i++) {
      const [lon1, lat1] = coordinates[i - 1];
      const [lon2, lat2] = coordinates[i];
      const distance = Math.sqrt(Math.pow(lon2 - lon1, 2) + Math.pow(lat2 - lat1, 2));
      totalLength += distance;
    }
  
    return totalLength;
  };
  