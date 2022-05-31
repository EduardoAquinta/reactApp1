import './App.css';
import Header from './containers/header';
import Moodbuttons from './containers/day-mood-buttons';
import './containers/text-input';
import './containers/7-day-tracker';
import './containers/advice-generator';
import { useState } from "react";


function Container() {

}



function App() {
  return (
    <div className="App">
      <Header />
      <Moodbuttons />
    </div>
  );
}

export default App;   
