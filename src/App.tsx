import React from 'react';
import BusStops from './components/BusStops';
import Header from './components/Header';

function App() {
  return (
    <div>
      <div className="xl:app-background 2xl:app-background app-background-color min-h-screen min-w-screen">
        <div className="px-5 lg:px-10 py-5 lg:py-10 z-50">
          <Header></Header>
          <BusStops></BusStops>
        </div>      
      </div>
    </div>
   
  );
}

export default App;
