import React from 'react';
import tannerLifting from './img/Screenshot_20230127-075947.png';
import './App.css';
import SiteHeader from './Header';
import MyForm from './prediction_page';
import { JSXForm } from './prediction_adv';

function App() {
  return (
    <div className="App">
      <SiteHeader></SiteHeader>

      <img src={tannerLifting} className="App-logo" alt="logo" />
      <JSXForm></JSXForm>
      {/* <MyForm></MyForm> */}
    </div>
  );
}

export default App;
