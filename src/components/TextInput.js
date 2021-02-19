import PropTypes from 'prop-types';
import { useState } from 'react';

const TextInput = ({ placeholder, inputType, name }) => {
  const [state, setState] = useState({ loginCredentials: {} });
  const handleChange = ({ target: { name, value } }) => {
    setState({ ...state, [name]: value });
    // console.log(state);
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
};

export default TextInput;
