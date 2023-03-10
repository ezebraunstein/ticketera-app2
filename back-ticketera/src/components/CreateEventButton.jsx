import React from 'react';

const CreateEventButton = ({ onClick }) => {
  return (
    <div className="box-1">
    <button className="btn btn-one" onClick={onClick}>
        <span>Crear Evento</span>
    </button>
    </div>
  );
};

export default CreateEventButton;