import PropTypes from 'prop-types';

const TextInput = ({ placeholder, inputType }) => (
  <div>
    <input type={inputType} placeholder={placeholder} className="input is-small my-1" />
  </div>
);

TextInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
  inputType: PropTypes.string.isRequired,
};

export default TextInput;
