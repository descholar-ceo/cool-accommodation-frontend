import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import jwtDecode from 'jwt-decode';
import { useHistory } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import sampleAccomm from '../assets/images/accommodation-3.jpg';
import {
  getMyFavouritesAction,
  getAllAccommodations,
  addAccommToMyFavsAction,
  removeAccommFromMyFavsAction,
} from '../redux/actions';

const AccommodationDetails = ({
  match: { params },
  myFavourites,
  allAccommodations,
  token,
  getMyFavouritesAction,
  getAllAccommodations,
  addAccommToMyFavsAction,
  removeAccommFromMyFavsAction,
}) => {
  let name;
  let price;
  let description;
  let classForTag;
  let textForTag;
  const favArr = [];
  let accommodationToDisplay = {};
  if (!token) {
    useHistory().push('/signin');
  } else {
    const { accommodationId } = params;
    useEffect(() => {
      getMyFavouritesAction(jwtDecode(token).id, token);
      getAllAccommodations(token);
    }, []);
    allAccommodations.forEach(currAccomm => {
      if (parseInt(accommodationId, 10) === currAccomm.id) {
        accommodationToDisplay = currAccomm;
      }
    });
    name = accommodationToDisplay.name;
    price = accommodationToDisplay.price;
    description = accommodationToDisplay.description;
    if (myFavourites.length > 0) {
      myFavourites.forEach(currElt => {
        favArr.push(currElt.accommodation_id);
        if (currElt.accommodation_id === accommodationToDisplay.id) {
          classForTag = 'is-success';
          textForTag = 'Unlike';
        }
      });
    } else {
      classForTag = 'is-danger';
      textForTag = 'Like';
    }
  }
  return (
    <>
      <Navbar bg="has-background-primary-dark" />
      <div className="m-2">
        <div><img src={sampleAccomm} alt="Sample accomm" /></div>
        <div className="accommodation-card-footer grid-3-col">
          <p className="accommodation-footer-legend">{name}</p>
          <p className="is-size-7 tag is-info is-rounded">
            $
            {price}
          </p>
          <button
            type="button"
            className={`cursor-hand is-size-7 tag button ${classForTag} is-rounded`}
            onClick={favArr.includes(accommodationToDisplay.id) ? () => {
              removeAccommFromMyFavsAction(jwtDecode(token).id, accommodationToDisplay.id, token);
            } : () => {
              addAccommToMyFavsAction(jwtDecode(token).id,
                { accomodation_id: accommodationToDisplay.id }, token);
            }}
          >
            {textForTag}
          </button>
        </div>
        <div>
          <h3>Description:</h3>
          <p>{description}</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

AccommodationDetails.propTypes = {
  accommodationId: PropTypes.arrayOf(PropTypes.object).isRequired,
  match: PropTypes.shape().isRequired,
  myFavourites: PropTypes.objectOf().isRequired,
  allAccommodations: PropTypes.objectOf().isRequired,
  token: PropTypes.string.isRequired,
  getMyFavouritesAction: PropTypes.func.isRequired,
  getAllAccommodations: PropTypes.func.isRequired,
  addAccommToMyFavsAction: PropTypes.func.isRequired,
  removeAccommFromMyFavsAction: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  myFavourites: state.favouritesReducer.myFavourites,
  allAccommodations: state.accommodationsReducer.allAccommodations,
  token: state.loginReducer.token,
});

export default connect(mapStateToProps, {
  getMyFavouritesAction,
  getAllAccommodations,
  addAccommToMyFavsAction,
  removeAccommFromMyFavsAction,
})(AccommodationDetails);
