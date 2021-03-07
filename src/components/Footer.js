/* eslint-disable jsx-a11y/control-has-associated-label */
import {
  FaFacebook, FaTwitter, FaInstagram, FaYoutube,
} from 'react-icons/fa';

const Footer = () => (
  <footer className="is-centered is-vcentered has-text-centered">
    <p className="my-2 is-size-7">Rwanda, Western, Rubavu, Gisenyi</p>
    <p className="my-2 is-size-7">+250701234567</p>
    <div className="centered grid-4-col my-2 width-40">
      <div className="mx-2"><a href="https://www.facebook.com/"><FaFacebook /></a></div>
      <div className="mx-2"><a href="https://twitter.com/"><FaTwitter /></a></div>
      <div className="mx-2"><a href="https://youtube.com/"><FaYoutube /></a></div>
      <div className="mx-2"><a href="https://www.instagram.com/"><FaInstagram /></a></div>
    </div>
    <p className="my-2 is-size-7">CoolAccommodation 2021. All right reserved</p>
  </footer>
);

export default Footer;
