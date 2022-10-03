import React, { useState } from "react";

import { Button } from "./components/Button";
import { Statistics } from "./components/Statistics";
import { Title } from "./components/Title";

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div id="center-feedback">
      <Title name={"give feedback"} />
      <Button  name={"Good"} func={setGood} value={good} />
      <Button  name={"Neutral"} func={setNeutral} value={neutral} />
      <Button  name={"Bad"} func={setBad} value={bad} />

      <Statistics name={"statistics"} good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
