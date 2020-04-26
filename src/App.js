import React from "react";
import "./App.css";
import Header from "./components/Header";
import Background from "./components/Background";
import Navbar from "./components/Navbar";
import Promotion from "./components/Promotion";
function App() {
  return (
    <div className="App">
      <Background />
      <Navbar />
      <Header />
      <Promotion />
    </div>
  );
}

export default App;
