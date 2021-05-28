import React from 'react';
import logo from './logo.svg';
import './App.css';
import {TextField} from "@material-ui/core"


function App() {

  const [location, setLocation] = React.useState('');


  const updateLocation = (event) => {
    setLocation(event.target.value)
  }
  
  return (
    <div className="App">
      
      <div className="location-filter">

        <span>Finding vets around <TextField value={location} onChange={updateLocation} placeholder="Your Location"/></span>
      </div>
    </div>
  );
}

export default App;
