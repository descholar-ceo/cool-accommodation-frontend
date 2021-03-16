import { connect } from 'react-redux';
import { useEffect } from 'react';
import jwtDecode from 'jwt-decode';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import AccommodationCard from '../components/AccommodationCard';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { getMyFavouritesAction, getAllAccommodations } from '../redux/actions';

const AccommodationPage = ({
  allAccommodations, token, getMyFavouritesAction, getAllAccommodations,
}) => {
  let accommodationsList;
  if (!token) {
    useHistory().push('/signin');
  } else {
    useEffect(() => {
      getMyFavouritesAction(jwtDecode(token).id, token);
      getAllAccommodations(token);
    }, []);
    accommodationsList = allAccommodations.map(accomm => (
      <AccommodationCard key={accomm.id} accommodationObject={accomm} />));
  }
  return (
    <div className="">
      <Navbar bg="has-background-primary-dark" />
      <div className="m-2">
        { accommodationsList }
      </div>
      <Footer />
    </div>
  );
};

AccommodationPage.propTypes = {
  allAccommodations: PropTypes.objectOf().isRequired,
  token: PropTypes.string.isRequired,
  getMyFavouritesAction: PropTypes.func.isRequired,
  getAllAccommodations: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  allAccommodations: state.accommodationsReducer.allAccommodations,
  token: state.loginReducer.token,
});

export default connect(mapStateToProps,
  { getMyFavouritesAction, getAllAccommodations })(AccommodationPage);
