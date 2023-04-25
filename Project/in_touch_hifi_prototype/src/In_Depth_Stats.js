import logo from './DepthStatus.png';
import React, { useState } from 'react';
import './App.css';
import {Link, redirect, Routes, Route, useNavigate} from 'react-router-dom';
import { Spotify } from 'react-spotify-embed';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css'; // import the CSS file
import Switch from 'react-switch';

function System_Status() {

  const navigate = useNavigate();
  const [value, setValue] = useState(70);
  const [checked, setChecked] = useState(false);
  const [motortempValue, setmotortempValue] = useState('85');
  const [coolanttempValue, setcoolanttempValue] = useState('81');
  const [batterytempValue, setbatterytempValue] = useState('81');
  const [lowestcellValue, setlowestcellValue] = useState('3.204');
  const [highestcellValue, sethighestcellValue] = useState('3.327');
  const [tirepressureValue, settirepressureValue] = useState('34.2');

  const handlebackbutton = () => {
    console.log('Back Button clicked!');
    navigate('/System_Status'); // navigate to the landing page
    
  }

  const handleindepthstatsbutton = () => {
    console.log('In Depth Stats Button clicked!');
    navigate('/InDepthStats'); // navigate to the landing page
    
  }

  function TempSlider() {
    return (
      <InputRange
        maxValue={90}
        minValue={35}
        value={value}
        onChange={setValue}
      />
    );
  }

  

  return (
    <div className="App">
      <header className="App-header">
      <h2>
          In Depth Status of your EV
        </h2>
        <br />
        <br />
        <img src={logo} className="App-logo" alt="logo" />
        <br />

        <div>
      The motor temp is: {motortempValue} F.
        </div>
        <br />

        <div>
      The coolant temp is: {coolanttempValue} F.
        </div>
        <br />

        <div>
      The battery temp is: {batterytempValue} F.
        </div>
        <br />

        <div>
      The lowest cell charge is: {lowestcellValue} volts.
        </div>
        <br />

        <div>
      The highest cell charge is: {highestcellValue} volts.
        </div>
        <br />

        <div>
      The tire pressure is: {tirepressureValue} psi.
        </div>
        <br />
    
        <div>
        <button onClick={handlebackbutton}>Back</button>
        </div>


      </header>
    </div>
  );
}

export default System_Status;
