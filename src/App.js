import React from "react";
import "./App.css";
import Header from "./components/Header";
import Background from "./components/Background";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div className="App">
      <Background />
      <Navbar />
      <Header />
    </div>
  );
}

export default App;
