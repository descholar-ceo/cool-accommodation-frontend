import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Navbar from '../components/Navbar';
import TextInput from '../components/TextInput';
import { loginAction } from '../redux/actions';

const LoginPage = ({ loginCredentials, loginAction }) => {
  const handleSubmit = () => {
    loginAction(loginCredentials);
  };
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
      </div>
    </>
  );
};

LoginPage.propTypes = {
  loginCredentials: PropTypes.objectOf(PropTypes.string).isRequired,
  loginAction: PropTypes.func.isRequired,
  // error: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  loginCredentials: state.loginReducer.loginCredentials,
  error: state.loginReducer.error,
});

export default connect(mapStateToProps, { loginAction })(LoginPage);
