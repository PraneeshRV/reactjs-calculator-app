import React from "react";
import ReactDOM from "react-dom";
import CalculatorApp from "./App/App.jsx";

ReactDOM.render(
  <div>
    <h1 className="title">React Mac Calculator</h1>
    <MacCalculator />
    <div className="credits-ctr">
      <p className="credits">Made with ❤ by PRANEESH RV.</p>
    </div>
  </div>,
  document.getElementById('root')
);
