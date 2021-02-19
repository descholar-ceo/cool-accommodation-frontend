import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import logoUrl from '../assets/images/accommodation-logo.svg';

const Navbar = ({ bg }) => (
  <nav className={`columns p-6 ${bg}`}>
    <div className="column is-half">
      <div className="columns">
        <NavLink to="/">
          <img src={logoUrl} alt="cool accommodation logo" className="image is-24x24 is-rounded" />
          <h2 className="is-size-5 has-text-white">CoolAccommodation</h2>
        </NavLink>
      </div>
    </div>
    <div className="column is-half">
      <div className="columns is-pulled-right">
        <div className="column is-2 mx-5">
          <NavLink className="button is-dark is-rounded mx-2 is-uppercase" to="/signin">Sign In</NavLink>
        </div>
        <div className="column is-2 mx-5">
          <NavLink className="button is-dark is-rounded mx-2 is-uppercase" to="/signup">Sign Up</NavLink>
        </div>
      </div>
    </div>
  </nav>
);

Navbar.propTypes = {
  bg: PropTypes.string.isRequired,
};

export default Navbar;
