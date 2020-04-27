import React from "react";
import "./App.css";
import Header from "./components/Header";
import Background from "./components/Background";
import Navbar from "./components/Navbar";
import Promotion from "./components/Promotion";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <Background />
      <Navbar />
      <Header />
      <Promotion />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
