import React from "react";
import "./App.css";
import Header from "./components/Header";
import Background from "./components/Background";
import Navbar from "./components/Navbar";
import Promotion from "./components/Promotion";
import Newsletter from "./components/Newsletter";
function App() {
  return (
    <div className="App">
      <Background />
      <Navbar />
      <Header />
      <Promotion />
      <Newsletter />
    </div>
  );
}

export default App;
