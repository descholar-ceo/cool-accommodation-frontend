import { connect } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import TextInput from '../components/TextInput';

const SignupPage = ({ token }) => {
  if (token.length > 0) {
    useHistory().push('/accommodations');
  }
  return (
    <>
      <Navbar bg="has-background-primary-dark" />
      <div className="columns is-centered is-vcentered height-70 login-container">
        <div className="login-component p-4">
          <TextInput inputType="email" placeholder="email" />
          <TextInput inputType="password" placeholder="password" />
          <TextInput inputType="password" placeholder="confirm password" />
          <button type="button" className="button is-link is-rounded my-2 is-small">Signup</button>
          <div>
            <p>
              Already have an account?
              <Link to="/signin" className="button is-dark is-rounded mx-2 is-uppercase is-small">Signin</Link>
            </p>
          </div>
        </div>
      </div>
      <Footer className="fixed-elt" />
    </>
  );
};

SignupPage.propTypes = {
  token: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  token: state.loginReducer.token,
});

export default connect(mapStateToProps, null)(SignupPage);
