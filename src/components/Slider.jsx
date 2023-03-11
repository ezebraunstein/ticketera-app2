import { API, graphqlOperation, Storage } from "aws-amplify";
import { listEventos } from "../graphql/queries";
import { useState, useEffect } from "react";
import "./Slider.css";

const Slider = () => {
  const [events, setEvents] = useState([]);
  const fetchEvents = async () => {
    try {
      const eventsData = await API.graphql(graphqlOperation(listEventos));
      const eventsList = eventsData.data.listEventos.items;
      const eventsWithImages = await Promise.all(
        eventsList.map(async (event) => {
          const imageUrl = await Storage.get(event.imagenBanner);
          event.imageUrl = imageUrl;
          return event;
        })
      );
      setEvents(eventsWithImages.slice(-4));
    } catch (error) {
      console.log("", error);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <div className="slider-frame">
      <ul>
        {/* {events.map((event) => { */}
        {events.slice(0, 4).map((event, index) => {
          return (
            <li>
              <img className="sliderImg" src={event.imageUrl} alt="" />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Slider;


