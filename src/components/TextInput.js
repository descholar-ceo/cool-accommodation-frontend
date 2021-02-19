import PropTypes from 'prop-types';
import { useState } from 'react';
import { connect } from 'react-redux';
import { loginCredentialTypingAction } from '../redux/actions';

const TextInput = ({
  placeholder, inputType, name, previousLoginCred, captureCredential,
}) => {
  const [state, setState] = useState({ loginCredentials: {} });
  const handleChange = ({ target: { name, value } }) => {
    setState({ ...state, [name]: value });
    captureCredential({ ...previousLoginCred, [name]: value });
    // console.log(previousLoginCred);
  };
  return (
    <div>
      <input
        onChange={event => handleChange(event)}
        type={inputType}
        placeholder={placeholder}
        name={name}
        className="input is-small my-1"
      />
    </div>
  );
};

TextInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
  inputType: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  previousLoginCred: PropTypes.objectOf().isRequired,
  captureCredential: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({ previousLoginCred: state.loginReducer.loginCredentials });
const mapDispatchToProps = dispatch => ({
  captureCredential: credential => dispatch(loginCredentialTypingAction(credential)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TextInput);
