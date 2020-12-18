import React, { Children, createElement } from 'react';
import './App.css';



function App() {


  const nome = React.createElement (
    "h1",
    {},
    "ciao Mondo"

  )

  //tabindex => tabIndex
  //class, for => className, htmlFor
  
  return  (
    <h1 className ="mytitle">Hello word</h1>
  );
}

export default App;
