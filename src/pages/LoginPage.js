const { Link } = require('react-router-dom');
const { default: TextInput } = require('../components/TextInput');

const LoginPage = () => (
  <div className="columns is-centered is-vcentered full-height login-container">
    <div className="column is-4 login-component">
      <TextInput inputType="text" placeholder="Enter your username here..." />
      <TextInput inputType="password" placeholder="Enter your password here..." />
      <button type="button" className="button is-link is-rounded my-2 is-small">Signin</button>
      <div>
        <p>
          You don&apos;t have an account?
          <Link to="/signin" className="button is-dark is-rounded mx-2 is-uppercase is-small">Signup</Link>
        </p>
      </div>
    </div>
  </div>
);

export default LoginPage;
