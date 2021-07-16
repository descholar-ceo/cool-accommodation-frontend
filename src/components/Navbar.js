import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import logoUrl from '../assets/images/accommodation-logo.svg';

const Navbar = ({ bg, token }) => {
  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.reload();
  };
  const loginOrLogout = token.length === 0 ? (
    <div className="grid-2-col">
      <div>
        <NavLink className="button is-small is-dark is-rounded mx-2 is-uppercase" to="/signin">Sign In</NavLink>
      </div>
      <div>
        <NavLink className="button is-small is-dark is-rounded mx-2 is-uppercase" to="/signup">Sign Up</NavLink>
      </div>
    </div>
  ) : (
    <div className="grid-2-col">
      <div>
        <NavLink className="button is-small is-primary is-rounded mx-2 is-uppercase is-small" to="/accommodations">Accommodations</NavLink>
      </div>
      <div>
        <button onClick={() => handleLogout()} className="button is-small is-danger is-rounded mx-2 is-uppercase is-small" type="button">Logout</button>
      </div>
    </div>
  );

  return (
    <nav className={`grid-2-col p-6 ${bg}`}>
      <div>
        <NavLink to="/">
          <img src={logoUrl} alt="cool accommodation logo" className="image is-24x24 is-rounded" />
        </NavLink>
      </div>
      {loginOrLogout}
    </nav>
  );
};

Navbar.defaultProps = {
  token: '',
};

Navbar.propTypes = {
  bg: PropTypes.string.isRequired,
  token: PropTypes.string,
};

const mapStateToProps = state => ({ token: state.loginReducer.token });

export default connect(mapStateToProps, null)(Navbar);
