import React from "react";
import Navbar from "../src/components/Navbar/Navbar";
import Header from "../src/components/Header/Header";
import "./App.css";
import About from "./components/About/About";
import Groups from "./components/Groups/Groups";
import Buy from "./components/Buy/Buy";
import Seamless from "./components/Seamless/Seamless";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <Groups />
      <Buy />
      <Seamless />
      <Footer />
    </div>
  );
};

export default App;
