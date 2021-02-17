import PropTypes from 'prop-types';

const TextInput = ({ placeholder }) => (
  <div>
    <input type="text" placeholder={placeholder} />
  </div>
);

TextInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
};

export default TextInput;
