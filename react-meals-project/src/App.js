import React, { Fragment } from "react";
import Cart from "./Components/Cart/Cart";
import Header from "./Components/Header";
import Meals from "./Components/Meals/Meals";

const App = () => {
  return (
    <Fragment>
      <Cart></Cart>
      <Header />
      <Meals />
    </Fragment>
  );
};

export default App;
