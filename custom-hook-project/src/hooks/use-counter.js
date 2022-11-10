import { useState, useEffect } from "react";

const useCounter = (increase = true) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
        if (increase) {
            setCounter((prevCounter) => prevCounter + 1);            
        } else{
            setCounter((prevCounter) => prevCounter - 1);
        }
    }, 1000);

    return () => clearInterval(interval);
  }, [increase]);

  return counter;
};

export default useCounter;
