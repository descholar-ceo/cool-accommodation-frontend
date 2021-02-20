import PropTypes from 'prop-types';
import sampleAccomm from '../assets/images/accommodation-7.jpg';

const AccommodationCard = ({ accommodationObject }) => {
  const { name, price, rooms } = accommodationObject;
  return (
    <div>
      <div><img src={sampleAccomm} alt="Sample accomm" /></div>
      <div>
        <div>{name}</div>
        <div>
          $
          {price}
        </div>
        <div>
          {rooms}
          {' '}
          rooms
        </div>
      </div>
    </div>
  );
};

AccommodationCard.propTypes = {
  accommodationObject: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default AccommodationCard;
