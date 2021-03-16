import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import jwtDecode from 'jwt-decode';
import { useHistory } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import sampleAccomm from '../assets/images/accommodation-3.jpg';
import { getMyFavouritesAction } from '../redux/actions';

const AccommodationDetails = ({
  match: { params }, myFavourites, allAccommodations, token, getMyFavouritesAction,
}) => {
  let name;
  let price;
  let description;
  let classForTag;
  let textForTag;
  if (!token) {
    useHistory().push('/signin');
  } else {
    const { accommodationId } = params;
    let accommodationToDisplay = {};
    useEffect(() => { getMyFavouritesAction(jwtDecode(token).id, token); }, []);
    allAccommodations.forEach(currAccomm => {
      if (parseInt(accommodationId, 10) === currAccomm.id) {
        accommodationToDisplay = currAccomm;
      }
    });
    name = accommodationToDisplay.name;
    price = accommodationToDisplay.price;
    description = accommodationToDisplay.description;
    classForTag = 'is-danger';
    textForTag = 'Add to favourite';
    if (myFavourites.length === 0) {
      classForTag = 'is-danger';
      textForTag = 'Add to favourite';
    } else {
      myFavourites.forEach(currElt => {
        if (currElt.accommodation_id === accommodationToDisplay.id) {
          classForTag = 'is-success';
          textForTag = 'Remove from favourites';
        }
      });
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
  myFavourites: PropTypes.objectOf().isRequired,
  allAccommodations: PropTypes.objectOf().isRequired,
  token: PropTypes.string.isRequired,
  getMyFavouritesAction: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  myFavourites: state.favouritesReducer.myFavourites,
  allAccommodations: state.accommodationsReducer.allAccommodations,
  token: state.loginReducer.token,
});

export default connect(mapStateToProps, { getMyFavouritesAction })(AccommodationDetails);
