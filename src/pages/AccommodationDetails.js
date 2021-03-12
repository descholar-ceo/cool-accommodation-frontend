import PropTypes from 'prop-types';

const AccommodationDetails = ({ match: { params } }) => {
  const { accommodationId } = params;
  return (
    <div>
      <h1>
        Hello this is the sent accommodation
        {accommodationId}
      </h1>
    </div>
  );
};

AccommodationDetails.propTypes = {
  accommodationId: PropTypes.arrayOf(PropTypes.object).isRequired,
  match: PropTypes.shape().isRequired,
};

export default AccommodationDetails;
