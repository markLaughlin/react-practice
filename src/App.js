import React from 'react';
import './App.css';
import HelloWorld from "./state-drills/HelloWorld"
import Bomb from "./state-drills/Bomb"
import RouletteGun from "./state-drills/RouletteGun"

function App() {
  return (
    <div className="App">
      <h1>Three Drills on State</h1>
      
      <div className = "box">
      <br />
      <HelloWorld />
      <br />
      </div>

      <br />

      <div className = "box">
      <br />
      <Bomb />
      <br />
      </div>

      <br />

      <div className = "box">
      <br />
      <RouletteGun bulletInChamber={8}/>
      <br />
      </div>
      
    </div>
  )
}

export default App;
