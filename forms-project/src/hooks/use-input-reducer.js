import { useReducer } from "react";

const initialInputState = {
  value: "",
  isTouched: false,
};

const inputStateReducer = (state, action) => {
    switch (action.type) {
        case 'INPUT': 
            return {value: action.value, isTouched: state.isTouched};
        case 'BLUR':
            return {value: state.value, isTouched: true}
        default:
            return initialInputState
    }    
};

const useInput = (isValidValue) => {
  const [inputState, dispatch] = useReducer(inputStateReducer, initialInputState);
  
  const valueInvalid = !isValidValue(inputState.value);
  const inputInvalid = valueInvalid && inputState.isTouched;

  const inputChangeHandler = (e) => {
    dispatch({type: 'INPUT', value: e.target.value})
  };

  const inputBlurHandler = (e) => {
    dispatch({type: 'BLUR'})
  };

  const reset = () => {
    dispatch({type: 'RESET'})
  };

  return {
    value: inputState.value,
    valueInvalid,
    inputChangeHandler,
    inputInvalid,
    inputBlurHandler,
    reset,
  };
};

export default useInput;
