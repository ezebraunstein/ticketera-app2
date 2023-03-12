import './NewEvent.css';
import { useState } from "react";
import { Storage } from 'aws-amplify';
import { createEvento } from "../graphql/mutations";
import { v4 as uuid } from "uuid";
import { API, graphqlOperation } from "aws-amplify";
import Footer from './Footer';
import FooterCreateEvent from './FooterCreateEvent';


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
    <div>
    <form className="eventForm" onSubmit={handleSubmit}>
      <label className='labelEvent'>
        Nombre Evento:
        <input className='inputEvent'
          type="text"
          name="nombreEvento"
          value={eventData.nombreEvento}
          onChange={handleInputChange}
        />
      </label>
      <label className='labelEvent'>
        Fecha Inicio:
        <input className='inputEvent'
          type="date"
          name="fechaInicio"
          value={eventData.fechaInicio}
          onChange={handleInputChange}
        />
      </label>
      <label className='labelEvent'>
        Fecha Fin:
        <input className='inputEvent'
          type="date"
          name="fechaFin"
          value={eventData.fechaFin}
          onChange={handleInputChange}
        />
      </label>
      <label className='labelEvent'>
        Descripción:
        <input className='inputEvent'
          type="text"
          name="descripcion"
          value={eventData.descripcion}
          onChange={handleInputChange}
        />
      </label>
      <label className='labelEvent'>
        Imagen Banner:
        <input className='inputEvent'
          type="file"
          accept=".jpg,.jpeg,.png"
          name="imagenBanner"
          onChange={handleBannerChange}
        />
      </label>
      <label className='labelEvent'>
        Imagen Mini:
        <input className='inputEvent'
          type="file"
          accept=".jpg,.jpeg,.png"
          name="imagenMini"
          onChange={handleMiniChange}
        />
      </label>
      <label className='labelEvent'>
        Usuario ID:
        <input className='inputEvent'
          type="text"
          name="usuarioID"
          value={eventData.usuarioID}
          onChange={handleInputChange}
        />
      </label>
      <label className='labelEvent'>
        <button className='buttonEvent' type="submit">Agregar Evento</button>
      </label>
    </form>

    <FooterCreateEvent />
    </div>
  );
}

export default AddEvento;