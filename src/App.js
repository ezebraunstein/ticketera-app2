import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import Slider from "./components/Slider";
import SearchBar from "./components/SearchBar";
import EventsGrid from "./components/EventsGrid";
import ComponentWrapper from "./components/ComponentWrapper";
import NewEvent from "./components/NewEvent";
import CreateTypeTicket from "./components/CreateTypeTicket";
import Footer from "./components/Footer";
import awsExports from "./aws-exports";
import { Amplify } from "aws-amplify";
import OwnerEvents from "./components/OwnerEvents";


Amplify.configure(awsExports);

function App() {

  const [displayEvents, setShouldDisplayEvents] = useState(true);

  const toggleEventsDisplay = () => {
    setShouldDisplayEvents(!displayEvents);
  };

  return (
    <div className="App">
      <Header onButtonClick={toggleEventsDisplay} />
      <ComponentWrapper optionDisplay={displayEvents}>
        <Slider />
        <SearchBar />
        {/* <EventsGrid /> */}
        <OwnerEvents />
      </ComponentWrapper>
      <ComponentWrapper optionDisplay={!displayEvents}>
        <NewEvent />
      </ComponentWrapper>
      <Footer />
      {/* <CreateTypeTicket /> */}
    </div>
  );
}

export default App;

