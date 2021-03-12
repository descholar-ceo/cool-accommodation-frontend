import PropTypes from 'prop-types';
import { accommodations, favourites } from '../assets/samples/sample-accommodations';
import sampleAccomm from '../assets/images/accommodation-3.jpg';

const AccommodationDetails = ({ match: { params } }) => {
  const { accommodationId } = params;
  let accommodationToDisplay = {};
  accommodations.forEach(currAccomm => {
    if (parseInt(accommodationId, 10) === currAccomm.id) {
      accommodationToDisplay = currAccomm;
    }
  });
  const { name, price, description } = accommodationToDisplay;
  let classForTag = 'is-danger';
  let textForTag = 'Add to favourite';
  if (favourites.length === 0) {
    classForTag = 'is-danger';
    textForTag = 'Add to favourite';
  } else {
    favourites.forEach(currElt => {
      if (currElt.accommodation_id === accommodationToDisplay.id) {
        classForTag = 'is-success';
        textForTag = 'Remove from favourites';
      }
    });
  }
  return (
    <div className="mb-4">
      <div><img src={sampleAccomm} alt="Sample accomm" /></div>
      <div className="accommodation-card-footer grid-3-col">
        <p className="accommodation-footer-legend">{name}</p>
        <p className="is-size-7 tag is-info is-rounded">
          $
          {price}
        </p>
        <p className={`cursor-hand is-size-7 tag ${classForTag} is-rounded`}>{textForTag}</p>
      </div>
      <div>{description}</div>
    </div>
  );
};

AccommodationDetails.propTypes = {
  accommodationId: PropTypes.arrayOf(PropTypes.object).isRequired,
  match: PropTypes.shape().isRequired,
};

export default AccommodationDetails;
