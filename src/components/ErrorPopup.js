import PropTypes from 'prop-types';

const ErrorPopup = ({ error }) => (
  <div className="modal">
    <div className="modal-background" />
    <div className="modal-content">
      {error}
    </div>
    <button type="button" className="modal-close is-large" aria-label="close" />
  </div>
);

ErrorPopup.propTypes = {
  error: PropTypes.objectOf().isRequired,
};

export default ErrorPopup;
