import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import AccommodationCard from '../components/AccommodationCard';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const AccommodationPage = ({ allAccommodations, token }) => {
  if (token.length === 0) {
    useHistory().push('/signin');
  }
  const accommodationsList = allAccommodations.map(accomm => (
    <AccommodationCard key={accomm.id} accommodationObject={accomm} />));

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
};

const mapStateToProps = state => ({
  allAccommodations: state.accommodationsReducer.allAccommodations,
  token: state.loginReducer.token,
});

export default connect(mapStateToProps, null)(AccommodationPage);
