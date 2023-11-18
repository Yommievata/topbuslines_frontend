import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './BusStopList.css';

const LineStops = ({ lineNumber, stops }) => (
  <div className="bus-stop-container">
    <h3 className="line-number">Line {lineNumber}</h3>
    <ul className="stop-list">
      {stops.map((stopPoint, index) => (
        <li key={index} className="stop-item">
          <strong>{stopPoint.StopPointName}</strong> - {stopPoint.ZoneShortName}
        </li>
      ))}
    </ul>
  </div>
);

const BusStopList = ({ topBusLines }) => {
  const [busStops, setBusStops] = useState([]);

  useEffect(() => {
    const fetchBusStops = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/lines/all?topBusLines=${topBusLines}`);

        setBusStops(response.data);
      } catch (error) {
        console.error('Error fetching bus stops:', error);
      }
    };

    fetchBusStops();
  }, [topBusLines]);

  return (
    <div>
      <h2>Bus Stops for Top {topBusLines} Bus Lines</h2>
      {Object.keys(busStops).map((lineNumber) => (
        <LineStops key={lineNumber} lineNumber={lineNumber} stops={busStops[lineNumber]} />
      ))}
    </div>
  );
};

export default BusStopList;