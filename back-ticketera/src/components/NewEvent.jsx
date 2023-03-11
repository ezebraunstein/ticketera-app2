// import './NewEvent.css';

// import { useState, useEffect } from "react";
// import { listEventos } from "../graphql/queries";
// import { createEvento } from "../graphql/mutations";
// import { v4 as uuid } from "uuid";
// import { Amplify, API, graphqlOperation } from "aws-amplify";
// import awsExports from "../aws-exports";

// function AddEvento() {
//   const [eventData, setEventData] = useState({
//     nombreEvento: "",
//     fechaInicio: "",
//     fechaFin: "",
//     descripcion: "",
//     imagenBanner: "",
//     imagenMini: "",
//     usuarioID: ""
//   });

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setEventData((prevData) => ({
//       ...prevData,
//       [name]: value
//     }));
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const createEventInput = {
//       id: uuid(),
//       nombreEvento: eventData.nombreEvento,
//       fechaInicio: new Date(eventData.fechaInicio).toISOString(),
//       fechaFin: new Date(eventData.fechaFin).toISOString(),
//       fechaAlta: new Date().toISOString(),
//       fechaBaja: new Date().toISOString(),
//       descripcion: eventData.descripcion,
//       imagenBanner: eventData.imagenBanner,
//       imagenMini: eventData.imagenMini,
//       usuarioID: eventData.usuarioID
//     };
//     await API.graphql(
//       graphqlOperation(createEvento, { input: createEventInput })
//     );
//     setEventData({
//       nombreEvento: "",
//       fechaInicio: "",
//       fechaFin: "",
//       descripcion: "",
//       imagenBanner: "",
//       imagenMini: "",
//       usuarioID: ""
//     });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Nombre Evento:
//         <input
//           type="text"
//           name="nombreEvento"
//           value={eventData.nombreEvento}
//           onChange={handleInputChange}
//         />
//       </label>
//       <label>
//         Fecha Inicio:
//         <input
//           type="date"
//           name="fechaInicio"
//           value={eventData.fechaInicio}
//           onChange={handleInputChange}
//         />
//       </label>
//       <label>
//         Fecha Fin:
//         <input
//           type="date"
//           name="fechaFin"
//           value={eventData.fechaFin}
//           onChange={handleInputChange}
//         />
//       </label>
//       <label>
//         Descripción:
//         <input
//           type="text"
//           name="descripcion"
//           value={eventData.descripcion}
//           onChange={handleInputChange}
//         />
//       </label>
//       <label>
//         Imagen Banner:
//         <input
//           type="text"
//           name="imagenBanner"
//           value={eventData.imagenBanner}
//           onChange={handleInputChange}
//         />
//       </label>
//       <label>
//         Imagen Mini:
//         <input
//           type="text"
//           name="imagenMini"
//           value={eventData.imagenMini}
//           onChange={handleInputChange}
//         />
//       </label>
//       <label>
//         Usuario ID:
//         <input
//           type="text"
//           name="usuarioID"
//           value={eventData.usuarioID}
//           onChange={handleInputChange}
//         />
//       </label>
//       <button type="submit">Agregar Evento</button>
//     </form>
//   );
// }

// export default AddEvento;

import './NewEvent.css';
import { useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { createEvento } from "../graphql/mutations";
import { v4 as uuid } from "uuid";
import { Storage } from 'aws-amplify';

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

  const [bannerFile, setBannerFile] = useState(null);
  const [miniFile, setMiniFile] = useState(null);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEventData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // const handleBannerFileChange = (event) => {
  //   setBannerFile(event.target.files[0]);
  // };

  // const handleMiniFileChange = (event) => {
  //   setMiniFile(event.target.files[0]);
  // };

  const handleFileChange = async (event) => {
    const { name } = event.target;
    const file = event.target.files[0];
    const filename = file.name;
    const stored = await Storage.put(filename, file, {
      contentType: 'image/jpeg'
    });
    setEventData((prevData) => ({
      ...prevData,
      [name]: stored.key
    }));
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Upload banner image to S3
    const bannerFileExt = bannerFile.name.split('.').pop();
    const bannerKey = `images/${uuid()}.${bannerFileExt}`;
    await Storage.put(bannerKey, bannerFile);

    // Upload mini image to S3
    const miniFileExt = miniFile.name.split('.').pop();
    const miniKey = `images/${uuid()}.${miniFileExt}`;
    await Storage.put(miniKey, miniFile);

    // Create event object with image keys
    const createEventInput = {
      id: uuid(),
      nombreEvento: eventData.nombreEvento,
      fechaInicio: new Date(eventData.fechaInicio).toISOString(),
      fechaFin: new Date(eventData.fechaFin).toISOString(),
      fechaAlta: new Date().toISOString(),
      fechaBaja: new Date().toISOString(),
      descripcion: eventData.descripcion,
      imagenBanner: eventData.bannerKey,
      imagenMini: eventData.miniKey,
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
          accept=".jpg"
          name={eventData.bannerKey}
          onChange={handleFileChange}
        />
      </label>
      <label className='labelEvent'>
        Imagen Mini:
        <input className='inputEvent'
          type="file"
          accept=".jpg"
          name={eventData.miniKey}
          onChange={handleFileChange}
        />
      </label>
      <label className='labelEvent'>
        Usuario ID:
        <input className='inputEvent'
          type="text"
          name={"usuarioID"}
          value={eventData.usuarioID}
          onChange={handleInputChange}
        />
      </label>
      <label className='labelEvent'>
        <button className='buttonEvent' type="submit">Agregar Evento</button>
      </label>
    </form>
  );
}

export default AddEvento;