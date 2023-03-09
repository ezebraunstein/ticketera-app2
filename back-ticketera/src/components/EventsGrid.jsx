import { API, graphqlOperation } from "aws-amplify";
import { listEventos } from "../graphql/queries";
import { useState, useEffect } from "react";
import "./EventsGrid.css";

const EventsGrid = () => {
    const [events, setEvents] = useState([]);
    const fetchEvents = async () => {
        try {
            const eventsData = await API.graphql(graphqlOperation(listEventos));
            const eventsList = eventsData.data.listEventos.items;
            console.log("", eventsList);
            setEvents(eventsList);
        } catch (error) {
            console.log("", error);
        }
    };

    useEffect(() => {
        fetchEvents();
    }, []);

    return (
        <div id="boxes">
            <div className="container">
                {events.map((event) => (
                    <div key={event.id} className="box">
                        <img src={event.imagenBanner} alt={event.nombreEvento} />
                        <h3>{event.nombreEvento}</h3>
                        <p>{event.descripcion}</p>
                        <button href={event.link} className="btnBuy">
                            <i className="icon-ticket"></i>Comprar Tickets
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EventsGrid;
