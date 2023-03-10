import './NewEvent.css';

import { useState } from "react";
import { Storage } from 'aws-amplify';
import { createEvento } from "../graphql/mutations";
import { v4 as uuid } from "uuid";
import { API, graphqlOperation } from "aws-amplify";


function AddEvento() {
  const [eventData, setEventData] = useState({
    // nombreEvento: "",
    // fechaInicio: "",
    // fechaFin: "",
    // descripcion: "",
    // imagenBanner: "",
    // imagenMini: "",
    // usuarioID: ""
  });

  const [bannerFile, setBannerFile] = useState(null);
  const [miniFile, setMiniFile] = useState(null);

  const handleBannerChange = (event) => {
    const file = event.target.files[0];
    setBannerFile(file);
  };

  const handleMiniChange = (event) => {
    const file = event.target.files[0];
    setMiniFile(file);
  };

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
      imagenBanner: "",
      imagenMini: "",
      usuarioID: eventData.usuarioID
    };

    // Upload banner file to S3 bucket
    if (bannerFile) {
      const bannerKey = `events/${createEventInput.id}/banner`;
      await Storage.put(bannerKey, bannerFile, {
        contentType: 'image/jpeg'
      });
      createEventInput.imagenBanner = bannerKey;
    }

    // Upload mini file to S3 bucket
    if (miniFile) {
      const miniKey = `events/${createEventInput.id}/mini`;
      await Storage.put(miniKey, miniFile, {
        contentType: 'image/jpeg'
      });
      createEventInput.imagenMini = miniKey;
    }

    await API.graphql(
      graphqlOperation(createEvento, { input: createEventInput })
    );

    // setEventData({
    //   nombreEvento: "",
    //   fechaInicio: "",
    //   fechaFin: "",
    //   descripcion: "",
    //   imagenBanner: "",
    //   imagenMini: "",
    //   usuarioID: ""
    // });

    // setBannerFile(null);
    // setMiniFile(null);
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
          type="file"
          accept=".jpg,.jpeg,.png"
          name="imagenBanner"
          onChange={handleBannerChange}
        />
      </label>
      <label>
        Imagen Mini:
        <input
          type="file"
          accept=".jpg,.jpeg,.png"
          name="imagenMini"
          onChange={handleMiniChange}
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