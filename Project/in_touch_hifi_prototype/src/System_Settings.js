import logo from './Settings_Image.jpg';
import React, { useState } from 'react';
import './App.css';
import {Link, redirect, Routes, Route, useNavigate} from 'react-router-dom';
import { Spotify } from 'react-spotify-embed';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css'; // import the CSS file
import Switch from 'react-switch';

function System_Settings() {

  const navigate = useNavigate();
  const [value, setValue] = useState(70);
  const [checked, setChecked] = useState(false);
  const [batterylowData, setbatterylowData] = useState('');
  const [batteryhighData, setbatteryhighData] = useState('');
  const [maxdrawData, setmaxdrawData] = useState('');

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

  function handlelowbattery(event) {
    const { value } = event.target;
    setbatterylowData(value);
  }

  function handlehighbattery(event) {
    const { value } = event.target;
    setbatteryhighData(value);
  }

  function handlemaxdraw(event) {
    const { value } = event.target;
    setmaxdrawData(value);
  }
  

  return (
    <div className="App">
      <header className="App-header">
      <h2>
          System Settings for your EV
        </h2>
        <br />
        <br />
        <img src={logo} className="App-logo" alt="logo" />
        <br />

        <h5>
          Launch Mode:
        </h5>
        <ToggleSwitch />
        <br />
        <h5>
          Battery Range Operating Between:
        </h5>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <input
            type="text"
            value={batterylowData}
            onChange={handlelowbattery}
            placeholder="6%"
            style={{marginRight: '10px', width: '50px' }}
          />
          <h5>
            and
          </h5>
          <input
            type="text"
            value={batteryhighData}
            onChange={handlehighbattery}
            placeholder="97%"
            style={{marginLeft: '10px', width: '50px' }}
          />
        </div>
        
        <h5>
          Max Power Draw:
        </h5>
        <input
          type="text"
          value={maxdrawData}
          onChange={handlemaxdraw}
          placeholder="50Kw"
          style={{marginRight: '10px' }}
        />

        <br />
    
        <div>
        <button onClick={handlebackbutton}>Back</button>
        </div>


      </header>
    </div>
  );
}

export default System_Settings;
