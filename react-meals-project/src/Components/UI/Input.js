import React, {forwardRef} from "react";
import styles from "./Input.module.css"

const Input = forwardRef((props, ref) => {
  return (
    <div className={`${styles.input} ${props.className}`}>
      <label htmlFor={props.inputConfig.id}>{props.label}</label>
      <input ref={ref} {...props.inputConfig}/>
    </div>
  );
});

export default Input;
