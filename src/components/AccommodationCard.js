import PropTypes from 'prop-types';

const AccommodationCard = ({ accommodationObject }) => {};

AccommodationCard.propTypes = {
  accommodationObject: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default AccommodationCard;
