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
      <Switch>
        <Route exact path="/">
          <div className="App">
            <Background />
            <Navbar />
            <Header />
            <Promotion />
            <Newsletter />
            <Footer />
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
