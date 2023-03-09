import "./App.css";
// import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import Slider from "./components/Slider";
import SearchBar from "./components/SearchBar";
import EventsGrid from "./components/EventsGrid";
import awsExports from "./aws-exports";
import { Amplify } from "aws-amplify";
Amplify.configure(awsExports);

function App() {
  return (
    <div className="App">
      <Header />
      <Slider />
      <SearchBar />
      <EventsGrid />
    </div>
  );
}

export default App;

