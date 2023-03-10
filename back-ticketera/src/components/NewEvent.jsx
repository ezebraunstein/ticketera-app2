import './NewEvent.css';

import { useState, useEffect } from "react";
import { listEventos } from "../graphql/queries";
import { createEvento } from "../graphql/mutations";
import { v4 as uuid } from "uuid";
import { Amplify, API, graphqlOperation } from "aws-amplify";
import awsExports from "../aws-exports";

function AddEvento() {
  const [eventData, setEventData] = useState({
    nombreEvento: "",
    fechaInicio: "",
    fechaFin: "",
    descripcion: "",
    imagenBanner: "",
    imagenMini: "",
    usuarioID: ""
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEventData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const createEventInput = {
      id: uuid(),
      nombreEvento: eventData.nombreEvento,
      fechaInicio: new Date(eventData.fechaInicio).toISOString(),
      fechaFin: new Date(eventData.fechaFin).toISOString(),
      fechaAlta: new Date().toISOString(),
      fechaBaja: new Date().toISOString(),
      descripcion: eventData.descripcion,
      imagenBanner: eventData.imagenBanner,
      imagenMini: eventData.imagenMini,
      usuarioID: eventData.usuarioID
    };
    await API.graphql(
      graphqlOperation(createEvento, { input: createEventInput })
    );
    setEventData({
      nombreEvento: "",
      fechaInicio: "",
      fechaFin: "",
      descripcion: "",
      imagenBanner: "",
      imagenMini: "",
      usuarioID: ""
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nombre Evento:
        <input
          type="text"
          name="nombreEvento"
          value={eventData.nombreEvento}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Fecha Inicio:
        <input
          type="date"
          name="fechaInicio"
          value={eventData.fechaInicio}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Fecha Fin:
        <input
          type="date"
          name="fechaFin"
          value={eventData.fechaFin}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Descripción:
        <input
          type="text"
          name="descripcion"
          value={eventData.descripcion}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Imagen Banner:
        <input
          type="text"
          name="imagenBanner"
          value={eventData.imagenBanner}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Imagen Mini:
        <input
          type="text"
          name="imagenMini"
          value={eventData.imagenMini}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Usuario ID:
        <input
          type="text"
          name="usuarioID"
          value={eventData.usuarioID}
          onChange={handleInputChange}
        />
      </label>
      <button type="submit">Agregar Evento</button>
    </form>
  );
}

export default AddEvento;