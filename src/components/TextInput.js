import PropTypes from 'prop-types';

const TextInput = ({ placeholder }) => (
  <div>
    <input type="text" placeholder={placeholder} className="input is-small my-2" />
  </div>
);

TextInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
};

export default TextInput;
