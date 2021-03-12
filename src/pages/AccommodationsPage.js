import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AccommodationCard from '../components/AccommodationCard';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const AccommodationPage = ({ allAccommodations }) => {
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
};

const mapStateToProps = state => ({
  allAccommodations: state.accommodationsReducer.allAccommodations,
});

export default connect(mapStateToProps, null)(AccommodationPage);
