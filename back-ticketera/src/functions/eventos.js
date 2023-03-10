// import { useState } from "react";
// import { listEventos } from "../graphql/queries";
// import { createEvento } from "../graphql/mutations";
// import { v4 as uuid } from "uuid";
// import { Amplify, API, graphqlOperation } from "aws-amplify";
// import awsExports from "../aws-exports";
// Amplify.configure(awsExports);


// const [events, setEvents] = useState([]);
// const [eventData, setEventsData] = useState({});

// export const fetchEvents = async () => {
//     try {
//         const eventData = await API.graphql(graphqlOperation(listEventos));
//         const eventList = eventData.data.listEventos.items;
//         console.log("Lista de Eventos", eventList);
//         setEvents(eventList);
//     } catch (error) {
//         console.log("error on fetching events", error);
//     }
// };

// export const uploadEvent = async () => {
//     const createEventInput = {
//         id: uuid(),
//         nombreEvento: eventData.nombre,
//         fechaInicio: eventData.fechaInicio,
//         fechaFin: eventData.fechaFin,
//         fechaAlta: eventData.fechaAlta,
//         fechaBaja: eventData.fechaBaja,
//         descripcion: eventData.descripcion,
//         imagenBanner: eventData.imagenBanner,
//         imagenMini: eventData.imagenMini,
//         usuarioID: eventData.usuarioID,

//     };
//     await API.graphql(
//         graphqlOperation(createEvento, { input: createEventInput })
//     );
// };

// comentario de prueba

