import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import TextInput from '../components/TextInput';

const LoginPage = () => (
  <>
    <Navbar bg="has-background-primary-dark" />
    <div className="columns is-centered is-vcentered height-70 login-container">
      <div className="column is-4 login-component">
        <TextInput name="email" inputType="text" placeholder="Enter your email here..." />
        <TextInput name="password" inputType="password" placeholder="Enter your password here..." />
        <button type="button" className="button is-link is-rounded my-2 is-small">Signin</button>
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

export default LoginPage;
