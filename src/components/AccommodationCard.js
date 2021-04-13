import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addAccommToMyFavsAction } from '../redux/actions';
import sampleAccomm from '../assets/images/accommodation-7.jpg';

const AccommodationCard = ({ accommodationObject, myFavourites, addAccommToMyFavsAction }) => {
  const { name, price } = accommodationObject;
  let classForTag = 'is-danger';
  let textForTag = 'Add to favourite';
  if (myFavourites.length === 0) {
    classForTag = 'is-danger';
    textForTag = 'Add to favourite';
  } else {
    myFavourites.forEach(currElt => {
      if (currElt.accommodation_id === accommodationObject.id) {
        classForTag = 'is-success';
        textForTag = 'Remove from favourites';
      }
    });
  }

  return (
    <div className="mb-4">
      <Link to={`/accommodations/${accommodationObject.id}`}><img src={sampleAccomm} alt="Sample accomm" /></Link>
      <div className="accommodation-card-footer grid-3-col">
        <Link to={`/accommodations/${accommodationObject.id}`} className="accommodation-footer-legend">{name}</Link>
        <p className="is-size-7 tag is-info is-rounded">
          $
          {price}
        </p>
        <p className={`cursor-hand is-size-7 tag ${classForTag} is-rounded`}>{textForTag}</p>
      </div>
    </div>
  );
};

AccommodationCard.propTypes = {
  accommodationObject: PropTypes.objectOf(PropTypes.object).isRequired,
  myFavourites: PropTypes.objectOf().isRequired,
  addAccommToMyFavsAction: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  myFavourites: state.favouritesReducer.myFavourites,
});

export default connect(mapStateToProps, { addAccommToMyFavsAction })(AccommodationCard);
