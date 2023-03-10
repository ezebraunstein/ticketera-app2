import { Storage, API, graphqlOperation } from "aws-amplify";
import { listEventos } from "../graphql/queries";
import { useState, useEffect } from "react";
import "./EventsGrid.css";

const EventsGrid = () => {
    const [events, setEvents] = useState([]);
    const [bannerURL, setBannerURL] = useState('');

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

    const fetchBanner = async idx => {
        debugger;
        const bannerFilePath = events[idx].imagenBanner;
        try {
            const fileAccessURL = await Storage.get(bannerFilePath, { expires: 600 });
            console.log('access url', fileAccessURL);
            // setBannerURL(fileAccessURL);
            return bannerFilePath;
        } catch (error) {
            console.error('error accessing the file from s3', error);
            setBannerURL('');
        }
    };

    useEffect(() => {
        fetchEvents();
    }, []);

    return (
        <div id="boxes">
            <h1 className="featuredEvents">🎉Eventos Destacados🎉</h1>
            <div className="container" style={{ display: "flex", flexWrap: "wrap" }}>
                {events.map((event) => (
                    <div key={event.id} className="box" style={{ flexBasis: "25%", marginBottom: "20px" }}>
                        {/* <button onClick={() => fetchBanner(idx)}>ccccc</button> */}
                        <img src={event.bannerURL} alt={event.nombreEvento} />
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
