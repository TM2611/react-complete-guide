import React, { Fragment } from 'react';
import Header from '../src/Components/Header' ;
import Meals from './Components/Meals/Meals';


const App = () => {
  return (
    <div>
        <Header/>
        <Meals/>
    </div>
  );
}

export default App;
