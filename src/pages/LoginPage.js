const { Link } = require('react-router-dom');
const { default: TextInput } = require('../components/TextInput');

const LoginPage = () => (
  <div className="columns is-centered is-vcentered full-height login-container">
    <div className="column is-4 login-component">
      <TextInput placeholder="Enter your username here..." />
      <TextInput placeholder="Enter your password here..." />
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
