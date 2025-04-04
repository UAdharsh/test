import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import RoutesComponent from "./routes";
import "./assets/styles/global.css";

const App = () => {
  return (
    <Router>
      <RoutesComponent />
    </Router>
  );
};

export default App;
