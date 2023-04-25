import logo from './Homepage_Car.jpg';
import React, { useState } from 'react';
import './App.css';
import { HashRouter as Router, Route, useNavigate, Switch } from 'react-router-dom';

function App() {

  const [outputValue, setOutputValue] = useState('Charging!');
  const [warningValue, setWarningValue] = useState('None!');
  const navigate = useNavigate();

  const handlecabinClick = () => {
    console.log('Cabin Button clicked!');
    navigate('/Cabin'); // navigate to the '/Cabin' page
    
  }

  const handlesystemsettingsClick = () => {
    console.log('System Settings Button clicked!');
    navigate('/System_Settings'); // navigate to the '/System_Settings' page
  }

  const handlesystemstatusClick = () => {
    console.log('System Status Button clicked!');
    navigate('/System_Status'); // navigate to the '/System_Status' page
  }


  return (
    <div className="App">
      <header className="App-header">
      <h2>
          Your Electric Vehicle: A Converted Triumph Spitfire.
        </h2>
        <br />
        <img src={logo} className="App-logo" alt="logo" style={{ width: '400px', height: '300px' }}/>
        <br />
        <div>
      Your Car is : {outputValue}
        </div>
        <br />
        <div>
      System Warnings : {warningValue}
        </div>

        <br />

        <div>
        <button onClick={handlecabinClick}>Cabin Controls</button>
        </div>
        <div>
        <button onClick={handlesystemsettingsClick}>System Controls</button>
        </div>
        <div>
        <button onClick={handlesystemstatusClick}>System Status</button>
        </div>


      </header>
    </div>
  );
}

export default App;
