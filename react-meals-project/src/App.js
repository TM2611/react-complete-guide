import React, {useState } from "react";
import Cart from "./Components/Cart/Cart";
import Header from "./Components/Header";
import Meals from "./Components/Meals/Meals";
import CartProvider from "./store/CartProvider";

const App = () => {
  const [isCartDisplay, setIsCartDisplay] = useState(false);

  const showCartHandler = () => {
    setIsCartDisplay(true);
  };

  const hideCartHandler = () => {
    setIsCartDisplay(false);
  };

  return (
    <CartProvider>
      {isCartDisplay && <Cart onCloseCart={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <Meals />
    </CartProvider>
  );
};

export default App;
