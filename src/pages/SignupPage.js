import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import TextInput from '../components/TextInput';

const SignupPage = () => (
  <>
    <Navbar bg="has-background-primary-dark" />
    <div className="columns is-centered is-vcentered height-70 login-container">
      <div className="column is-4 login-component">
        <TextInput inputType="text" placeholder="username" />
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
  </>
);

export default SignupPage;
