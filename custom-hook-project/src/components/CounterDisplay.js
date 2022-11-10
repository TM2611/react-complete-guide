import React from "react";
import ForwardCounter from "./ForwardCounter";
import BackwardCounter from "./BackwardCounter";

import styles from "./CounterDisplay.module.css";

const CounterDisplay = (props) => {
  return (
    <ul className={styles['counter-display']}>
      {props.counters.map((counter) =>
        counter === "+" ? (
          <li>
            <ForwardCounter />
          </li>
        ) : (
          <li>
            <BackwardCounter />
          </li>
        )
      )}
    </ul>
  );
};

export default CounterDisplay;
