import './App.css';
import Header from './containers/header';
import AppDescriptor from './containers/app-desciptor';
import AdviceGenerator from './containers/advice-generator';
import { useState } from "react";


function Container() {

  const [mood, setMood] = useState("...");
  const [text, setText] = useState("");


  const onClickValue = (event) => {
    event.preventDefault();
    setMood(event.target.value);
  };

  const handleSubmit =  (event) => {
      event.preventDefault();
      setText((event) => {
          return event.target.value
      })
  }
  return (
      <>
        <div>
      <h3>Please select todays general mood...</h3>
      <input class="radios"
        type="radio"
        value="Good"
        name="mood"
        id="good"
        checked={mood === "Good"}
        onChange={onClickValue}
      ></input><label>Good</label>
        <input class="radios"
        type="radio"
        value="Bad"
        name="mood"
        id="bad"
        checked={mood === "Bad"}
        onChange={onClickValue}
      ></input><label>Bad</label>
       <p>Your mood has been {mood}.</p>
      <h4>Please write about your day here ---</h4>
    </div>
        <form onSubmit={handleSubmit} className="form">
        <label className="label">
          <input
            className='input field'
            type="text"
            name="moodText"
            autoComplete='off'
            placeholder="Please enter a summary of your day here..."
            value={text}         
            onChange={(event) => {
              setText(event.target.value);
              }}  
          ></input>
          </label>
          </form>
          <ol>                   
              <li className="textList" key={text}>
                  {text}
              </li>
                  
          </ol>
      </>
      )
  } 



function App() {
  return (
    <div className="App">
      <Header />
      <AppDescriptor />
      <Container />
      <AdviceGenerator />
    </div>
  );
}

export default App;   
