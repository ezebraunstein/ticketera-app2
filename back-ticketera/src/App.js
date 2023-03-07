import "./App.css";
// import { useState, useEffect } from "react";
import { Header } from "./components/Header";

import { Amplify } from "aws-amplify";
import awsExports from "./aws-exports";
import Slider from "./components/Slider";
import SearchBar from "./components/SeachBar";
Amplify.configure(awsExports);

function App() {
  return (
    <div className="App">
      <Header img="../../images/pala.png" />
      <Slider />
      <SearchBar />
    </div>
  );
}

export default App;
