import React from 'react';
import Navbar from './components/navbar';
import './App.css';
import Counters from "./components/counters";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Counters />
    </React.Fragment>

  );
}

export default App;
