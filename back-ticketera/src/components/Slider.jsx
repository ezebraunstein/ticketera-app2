import { API, graphqlOperation } from "aws-amplify";
import { listEventos } from "../graphql/queries";
import { useState, useEffect } from "react";

const Slider = () => {
  const [events, setEvents] = useState([]);
  const fetchEvents = async () => {
    try {
      const eventsData = await API.graphql(graphqlOperation(listEventos));
      const eventsList = eventsData.data.listEventos.items;
      console.log("Lista de Usuarios", eventsList);
      setEvents(eventsList);
    } catch (error) {
      console.log("error on fetching users", error);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <div className="slider-frame">
      <ul>
        {events.map((events) => {
          return (
            <li>
              <img className="sliderImg" src={events.imagenBanner} alt="" />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Slider;
