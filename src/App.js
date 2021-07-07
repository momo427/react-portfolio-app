import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Project from "./components/Project";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Header from "./components/Header";
import './App.css';

function App() {
  return (
    <>
      <Navigation />
      <Header />
      <Project />
      <Footer />
    </>
  );
}

export default App;
