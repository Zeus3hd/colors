import React from "react";
import "./App.css";
import Header from "./components/Header";
import Background from "./components/Background";
import Navbar from "./components/Navbar";
import Promotion from "./components/Promotion";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <div className="App">
            <Background />
            <Header />
            <Promotion />
            <Newsletter />
          </div>
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
