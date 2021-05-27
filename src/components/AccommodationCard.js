import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import jwtDecode from 'jwt-decode';
import { Link } from 'react-router-dom';
import { addAccommToMyFavsAction, removeAccommFromMyFavsAction } from '../redux/actions';
import sampleAccomm from '../assets/images/accommodation-7.jpg';

const AccommodationCard = ({
  accommodationObject,
  myFavourites,
  addAccommToMyFavsAction,
  removeAccommFromMyFavsAction,
  token,
}) => {
  const { name, price } = accommodationObject;
  let classForTag = 'is-danger button';
  let textForTag = 'Add to favourite';
  let addOrRemoveFromFavs;
  if (myFavourites.length === 0) {
    classForTag = 'is-danger button';
    textForTag = 'Add to favourite';
  } else {
    myFavourites.forEach(currElt => {
      if (currElt.accommodation_id === accommodationObject.id) {
        classForTag = 'is-success button';
        textForTag = 'Remove from favourites';
        addOrRemoveFromFavs = () => {
          // console.log({ 'token from approved:': token });
          removeAccommFromMyFavsAction(jwtDecode(token).id, currElt.id, token);
        };
      } else {
        // console.log({ 'token from not approved:': token });
        addOrRemoveFromFavs = () => addAccommToMyFavsAction(jwtDecode(token).id,
          { accomodation_id: accommodationObject.id }, token);
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
        <button
          onClick={() => addOrRemoveFromFavs()}
          className={`cursor-hand is-size-7 tag ${classForTag} is-rounded`}
          type="button"
        >
          {textForTag}
        </button>
      </div>
    </div>
  );
};

AccommodationCard.propTypes = {
  accommodationObject: PropTypes.objectOf(PropTypes.object).isRequired,
  myFavourites: PropTypes.objectOf().isRequired,
  addAccommToMyFavsAction: PropTypes.func.isRequired,
  removeAccommFromMyFavsAction: PropTypes.func.isRequired,
  token: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  myFavourites: state.favouritesReducer.myFavourites,
  token: state.loginReducer.token,
});

export default connect(mapStateToProps, {
  addAccommToMyFavsAction, removeAccommFromMyFavsAction,
})(AccommodationCard);
