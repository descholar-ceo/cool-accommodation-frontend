/* eslint-disable camelcase */
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import jwt_decode from 'jwt-decode';
import { useHistory } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import sampleAccomm from '../assets/images/accommodation-3.jpg';
import { getMyFavouritesAction } from '../redux/actions';

const AccommodationDetails = ({
  match: { params }, allFavourites, allAccommodations, token, getMyFavouritesAction,
}) => {
  if (token.length === 0) {
    useHistory().push('/signin');
  }
  const { accommodationId } = params;
  let accommodationToDisplay = {};
  const decodedToken = jwt_decode(token);
  useEffect(() => { getMyFavouritesAction(decodedToken.id, token); }, []);
  allAccommodations.forEach(currAccomm => {
    if (parseInt(accommodationId, 10) === currAccomm.id) {
      accommodationToDisplay = currAccomm;
    }
  });
  const { name, price, description } = accommodationToDisplay;
  let classForTag = 'is-danger';
  let textForTag = 'Add to favourite';
  if (allFavourites.length === 0) {
    classForTag = 'is-danger';
    textForTag = 'Add to favourite';
  } else {
    allFavourites.forEach(currElt => {
      if (currElt.accommodation_id === accommodationToDisplay.id) {
        classForTag = 'is-success';
        textForTag = 'Remove from favourites';
      }
    });
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
          <p className={`cursor-hand is-size-7 tag ${classForTag} is-rounded`}>{textForTag}</p>
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
  allFavourites: PropTypes.objectOf().isRequired,
  allAccommodations: PropTypes.objectOf().isRequired,
  token: PropTypes.string.isRequired,
  getMyFavouritesAction: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  allFavourites: state.favouritesReducer.allFavourites,
  allAccommodations: state.accommodationsReducer.allAccommodations,
  token: state.loginReducer.token,
});

export default connect(mapStateToProps, { getMyFavouritesAction })(AccommodationDetails);
