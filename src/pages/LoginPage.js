const { default: TextInput } = require('../components/TextInput');

const LoginPage = () => (
  <div>
    <TextInput placeholder="Enter your username here..." />
    <TextInput placeholder="Enter your password here..." />
  </div>
);

export default LoginPage;
