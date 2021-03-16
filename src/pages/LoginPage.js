import { Link, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Navbar from '../components/Navbar';
import TextInput from '../components/TextInput';
import { loginAction } from '../redux/actions';
import Footer from '../components/Footer';
import ErrorPopup from '../components/ErrorPopup';

const LoginPage = ({
  loginCredentials, loginAction, token, error,
}) => {
  const handleSubmit = () => {
    loginAction(loginCredentials);
  };
  if (token.length > 0) {
    useHistory().push('/accommodations');
  }
  if (error.length > 0) {
    <ErrorPopup error={error} />;
  }

  return (
    <>
      <Navbar bg="has-background-primary-dark" />
      <div className="columns is-centered is-vcentered height-70 login-container">
        <div className="column is-4 login-component">
          <TextInput name="email" inputType="text" placeholder="Enter your email here..." />
          <TextInput name="password" inputType="password" placeholder="Enter your password here..." />
          <button onClick={() => handleSubmit()} type="button" className="button is-link is-rounded my-2 is-small">Signin</button>
          <div>
            <p>
              You don&apos;t have an account?
              <Link to="/signup" className="button is-dark is-rounded mx-2 is-uppercase is-small">Signup</Link>
            </p>
          </div>
        </div>
        <Footer mClass="fixed-elt" />
      </div>
    </>
  );
};

LoginPage.defaultProps = {
  error: '',
};

LoginPage.propTypes = {
  loginCredentials: PropTypes.objectOf(PropTypes.string).isRequired,
  loginAction: PropTypes.func.isRequired,
  token: PropTypes.string.isRequired,
  error: PropTypes.string,
};

const mapStateToProps = state => ({
  loginCredentials: state.loginReducer.loginCredentials,
  error: state.loginReducer.error,
  token: state.loginReducer.token,
});

export default connect(mapStateToProps, { loginAction })(LoginPage);
