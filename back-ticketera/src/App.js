import "./App.css";
// import { useState, useEffect } from "react";
import { Header } from "./components/Header";

import { Amplify } from "aws-amplify";
import awsExports from "./aws-exports";
import Slider from "./components/Slider";
import SearchBar from "./components/SearchBar";
Amplify.configure(awsExports);

function App() {
  return (
    <div className="App">
      <Header />
      <Slider />
      <SearchBar />
    </div>
  );
}

export default App;

