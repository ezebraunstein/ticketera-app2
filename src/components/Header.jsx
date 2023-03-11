import React from 'react';
import palaLogo from '../images/pala.png';
import CreateEventButton from './CreateEventButton';

const Header = ({ onButtonClick }) => {
  return (
    <header>
      <img className="logo" src={palaLogo} alt="LA PALA" width="70px" />
      <CreateEventButton onClick={onButtonClick} />
    </header>
  );
};

export default Header;