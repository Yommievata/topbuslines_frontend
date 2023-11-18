import React from 'react';
import './App.css';
import BusStopList from './components/BusStopList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Adjust the value of topBusLines based on your requirements */}
        <BusStopList topBusLines={10} />
      </header>
    </div>
  );
}

export default App;