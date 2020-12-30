import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./common/header"
import AppRouter from "./common/appRouter"


class App extends Component {
  render() {
    return (
      <Router>
        <Header/>
        <AppRouter/>
      </Router>
    );
  }
}

export default App;