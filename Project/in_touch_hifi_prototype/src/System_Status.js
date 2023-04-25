import logo from './Checklist.png';
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
  const [textBoxData, setTextBoxData] = useState('');
  const [onoffValue, setonoffValue] = useState('ON');
  const [chargeValue, setchargeValue] = useState('45');
  const [rangeValue, setrangeValue] = useState('65');
  const [tempValue, settempValue] = useState('69');

  const handlebackbutton = () => {
    console.log('Back Button clicked!');
    navigate('/'); // navigate to the landing page
    
  }

  const handleindepthstatsbutton = () => {
    console.log('In Depth Stats Button clicked!');
    navigate('/In_Depth_Stats'); // navigate to the landing page
    
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

  function handleInputChange(event) {
    const { value } = event.target;
    setTextBoxData(value);
  }
  

  return (
    <div className="App">
      <header className="App-header">
      <h2>
          System Status of your EV
        </h2>
        <br />
        <br />
        <img src={logo} className="App-logo" alt="logo" />
        <br />

        <div>
      Your Car is currently: {onoffValue}
        </div>
        <br />

        <div>
      Your Car is {chargeValue} % charged.
        </div>
        <br />

        <div>
      Your range is {rangeValue} miles.
        </div>
        <br />

        <div>
      Your cabin is {tempValue} degrees F.
        </div>
        <br />
    
        <div>
        <button onClick={handleindepthstatsbutton}>In Depth Status</button>
        <br />
        <button onClick={handlebackbutton}>Back</button>
        </div>


      </header>
    </div>
  );
}

export default System_Status;
