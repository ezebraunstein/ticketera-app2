import "./Footer.css";
import palaLogo from '../images/pala.png';

export const Footer = (prop) => {
    return (
    <footer>
        <div> &copy; Cooperativa Fort - 2023 <img className="logo" src={palaLogo} alt="LA PALA" width="25px" /></div>
    </footer>
    );
  };

export default Footer;