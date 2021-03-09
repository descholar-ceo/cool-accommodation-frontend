import PropTypes from 'prop-types';
import sampleAccomm from '../assets/images/accommodation-7.jpg';
import { favourites } from '../assets/samples/sample-accommodations';

const AccommodationCard = ({ accommodationObject }) => {
  const { name, price } = accommodationObject;
  let classForTag = '';
  if(favourites.length === 0){
    classForTag = ''
  }else{

  }
  console.log({ favourites });
  return (
    <div className="mb-4">
      <div><img src={sampleAccomm} alt="Sample accomm" /></div>
      <div className="accommodation-card-footer grid-3-col">
        <p className="accommodation-footer-legend">{name}</p>
        <p className="is-size-7 tag is-info is-rounded">
          $
          {price}
        </p>
        <p className="cursor-hand is-size-7 tag is-success is-rounded">favourite</p>
      </div>
    </div>
  );
};

AccommodationCard.propTypes = {
  accommodationObject: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default AccommodationCard;
