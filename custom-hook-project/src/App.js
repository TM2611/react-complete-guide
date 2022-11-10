import React, { useState } from "react";
import AddCounter from "./components/AddCounter";
import CounterDisplay from "./components/CounterDisplay";

function App() {
  const [counters, setCounters] = useState(["+", "-"]);

  const addIncreasingBtnHandler = () => {
    setCounters((prevCounters) => {
      return [...prevCounters, "+"];
    });
  };

  const addDecreasingBtnHandler = () => {
    setCounters((prevCounters) => {
      return [...prevCounters, "-"];
    });
  };

  return (
    <React.Fragment>
      <AddCounter
        onAddIncBtn={addIncreasingBtnHandler}
        onAddDecBtn={addDecreasingBtnHandler}
      />
      <CounterDisplay counters={counters} />
    </React.Fragment>
  );
}

export default App;
