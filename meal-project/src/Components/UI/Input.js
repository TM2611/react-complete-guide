import React from "react";
import styles from "./Input.module.css"

const Input = (props) => {
  return (
    <div className={`${styles.input} ${props.className}`}>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        type={props.type}
        id={props.id}
        name={props.name}
        // value={props.value}
        // onChange={props.onChange}
        // onBlur={props.onBlur}
      />
    </div>
  );
};

export default Input;
