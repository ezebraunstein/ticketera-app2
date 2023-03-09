import palaLogo from '../images/pala.png';

export const Header = (prop) => {
  return (
    <header>
      <img className="logo" src={palaLogo} alt="LA PALA" width="70px" />
      <div className="box-1">
        <div className="btn btn-one">
          <span>Crear Evento</span>
        </div>
      </div>
    </header>
  );
};
