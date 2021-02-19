import { NavLink } from 'react-router-dom';
import logoUrl from '../assets/images/accommodation-logo.svg';

const Navbar = () => (
  <nav className="columns p-6">
    <div className="column is-half">
      <div className="columns">
        <img src={logoUrl} alt="cool accommodation logo" className="image is-24x24 is-rounded" />
        <h2 className="is-size-5 has-text-white">CoolAccommodation</h2>
      </div>
    </div>
    <div className="column is-half">
      <div className="columns is-pulled-right">
        <div className="column is-2 mx-5">
          <NavLink className="button is-dark is-rounded mx-2 is-uppercase" to="/signin">Sign In</NavLink>
        </div>
        <div className="column is-2 mx-5">
          <button className="button is-dark is-rounded mx-2 is-uppercase" type="button">Sign Up</button>
        </div>
      </div>
    </div>
  </nav>
);

export default Navbar;
