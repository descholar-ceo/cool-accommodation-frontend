import PropTypes from 'prop-types';
import { useState } from 'react';
import { connect } from 'react-redux';
import { credentialTypingAction } from '../redux/actions';

const TextInput = ({
  placeholder, inputType, name, previousCred, captureCredential,
}) => {
  const [state, setState] = useState({ loginCredentials: {} });
  const handleChange = ({ target: { name, value } }) => {
    setState({ ...state, [name]: value });
    captureCredential({ ...previousCred, [name]: value });
    // console.log(previousCred);
  };
  return (
    <div>
      <input
        onChange={event => handleChange(event)}
        type={inputType}
        placeholder={placeholder}
        name={name}
        className="input is-small my-1"
        required
      />
    </div>
  );
};

TextInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
  inputType: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  previousCred: PropTypes.objectOf(PropTypes.string).isRequired,
  captureCredential: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  let prev;
  if (state.loginReducer.loginCredentials) {
    prev = state.loginReducer.loginCredentials;
  } else {
    prev = state.signupReducer.signupDetails;
  }
  return { previousCred: prev };
};
const mapDispatchToProps = dispatch => ({
  captureCredential: credential => dispatch(credentialTypingAction(credential)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TextInput);
