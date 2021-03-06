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
  const favIds = [];
  if (myFavourites.length > 0) {
    myFavourites.forEach(currElt => {
      favIds.push(currElt.accommodation_id);
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
          onClick={
            favIds.includes(accommodationObject.id) ? () => {
              removeAccommFromMyFavsAction(jwtDecode(token).id, accommodationObject.id, token);
            } : () => {
              addAccommToMyFavsAction(jwtDecode(token).id,
                { accomodation_id: accommodationObject.id }, token);
            }
            }
          className={`cursor-hand is-size-7 tag button ${
            favIds.includes(accommodationObject.id) ? 'is-success' : 'is-danger'
          } is-rounded`}
          type="button"
        >
          {
            favIds.includes(accommodationObject.id) ? 'Unlike' : 'Like'
          }
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
