import palaLogo from '../images/pala.png';
import CreateEventButton from './CreateEventButton';

export const Header = (prop) => {
  return (
    <header>
      <img className="logo" src={palaLogo} alt="LA PALA" width="70px" />
      <CreateEventButton />
    </header>
  );
};
