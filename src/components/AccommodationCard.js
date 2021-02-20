import PropTypes from 'prop-types';

const AccommodationCard = ({ accommodationObject }) => {
  const { name, price, description, rooms, city } = accommodationObject;
  
};

AccommodationCard.propTypes = {
  accommodationObject: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default AccommodationCard;
