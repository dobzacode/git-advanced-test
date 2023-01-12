import logo from "./logo.svg";
import React from "react";
import "./App.css";
import { NewComp } from "./components/card.js";

function App(props) {
  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {props.date.toLocaleTimeString()}.</h2>
    </div>
  );
}

export default App;
