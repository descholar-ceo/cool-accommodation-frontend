import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import sampleAccomm from '../assets/images/accommodation-7.jpg';

const AccommodationCard = ({ accommodationObject, allFavourites }) => {
  const { name, price } = accommodationObject;
  let classForTag = 'is-danger';
  let textForTag = 'Add to favourite';
  if (allFavourites.length === 0) {
    classForTag = 'is-danger';
    textForTag = 'Add to favourite';
  } else {
    allFavourites.forEach(currElt => {
      if (currElt.accommodation_id === accommodationObject.id) {
        classForTag = 'is-success';
        textForTag = 'Remove from favourites';
      }
    });
  }
  return (
    <div className="mb-4">
      <div><img src={sampleAccomm} alt="Sample accomm" /></div>
      <Link to={`/accommodations/${accommodationObject.id}`} className="accommodation-card-footer grid-3-col">
        <p className="accommodation-footer-legend">{name}</p>
        <p className="is-size-7 tag is-info is-rounded">
          $
          {price}
        </p>
        <p className={`cursor-hand is-size-7 tag ${classForTag} is-rounded`}>{textForTag}</p>
      </Link>
    </div>
  );
};

AccommodationCard.propTypes = {
  accommodationObject: PropTypes.objectOf(PropTypes.object).isRequired,
  allFavourites: PropTypes.objectOf().isRequired,
};

const mapStateToProps = state => ({
  allFavourites: state.favouritesReducer.allFavourites,
});

export default connect(mapStateToProps, null)(AccommodationCard);
