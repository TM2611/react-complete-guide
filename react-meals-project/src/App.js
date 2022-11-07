import React, { Fragment, useState } from "react";
import Cart from "./Components/Cart/Cart";
import Header from "./Components/Header";
import Meals from "./Components/Meals/Meals";

const App = () => {
  const [isCartDisplay, setIsCartDisplay] = useState(false);

  const showCartHandler = () => {
    setIsCartDisplay(true);
  };

  const hideCartHandler = () => {
    setIsCartDisplay(false);
  };

  return (
    <Fragment>
      {isCartDisplay && <Cart onCloseCart={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <Meals />
    </Fragment>
  );
};

export default App;
