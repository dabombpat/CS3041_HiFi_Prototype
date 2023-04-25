import logo from './Homepage_Car.jpg';
import React, { useState } from 'react';
import './App.css';
import {Link, redirect, Routes, Route, useNavigate} from 'react-router-dom';
import { Spotify } from 'react-spotify-embed';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css'; // import the CSS file
import Switch from 'react-switch';

function Cabin() {

  const navigate = useNavigate();
  const [value, setValue] = useState(70);
  const [checked, setChecked] = useState(false);

  const handlebackbutton = () => {
    console.log('Back Button clicked!');
    navigate('/'); // navigate to the landing page
    
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

  function ToggleSwitch() {
    return (
      <Switch
        checked={checked}
        onChange={setChecked}
        onColor="#86d3ff"
        onHandleColor="#2693e6"
        handleDiameter={30}
        uncheckedIcon={false}
        checkedIcon={false}
        height={20}
        width={48}
        className="react-switch"
        id="material-switch"
      />
    );
  }
  

  return (
    <div className="App">
      <header className="App-header">
      <h2>
          Cabin Controls for your EV
        </h2>
        <br />
        <br />

        <div>
        <Spotify link="https://open.spotify.com/track/7CC6UbCs4iGsePSzFxYxNn?si=a96bef80ff3a4954"/>
        <h5>
          Cabin Temperature:
        </h5>
        <TempSlider />
        <h5>
          Seat Heaters:
        </h5>
        <ToggleSwitch />
        </div>
        <br />
        <div>
        <button onClick={handlebackbutton}>Back</button>
        </div>



      </header>
    </div>
  );
}

export default Cabin;
