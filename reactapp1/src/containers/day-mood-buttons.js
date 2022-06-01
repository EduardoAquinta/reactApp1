import { useState } from "react";

function Moodstate() {
  const [mood, setMood] = useState("...");
  const onClickValue = (event) => {
    event.preventDefault();
    console.log(event.target.value);
    setMood(event.target.value);
  };

  return (
    <div>
      <h3>Please select todays general mood...</h3>
      <input
        type="radio"
        value="Good"
        name="mood"
        id="good"
        checked={mood === "Good"}
        onChange={onClickValue}
      />{" "}
      Good
      <input
        type="radio"
        value="Bad"
        name="mood"
        id="bad"
        checked={mood === "Bad"}
        onChange={onClickValue}
      />{" "}
      Bad
      <p>Your mood has been {mood}.</p>
      <h4>Please write about your day here ---</h4>
    </div>
  );
}
export default Moodstate;
