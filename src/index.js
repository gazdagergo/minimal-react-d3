import React from "react";
import ReactDOM from "react-dom";
import BasicSelect from './components/BasicSelect';

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Hello D3</h1>
      <BasicSelect />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
