/* eslint-disable jsx-a11y/control-has-associated-label */
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { getAccommodationProfile } from '../redux/actions';

const HomePage = ({ getAccommodationProfile }) => {
  // console.log(allFavourites.allFavourites);
  useEffect(() => getAccommodationProfile(), []);
  return (
    <div>
      <div className="home-page-1">
        <Navbar bg="none" />
        <div className="columns is-vcentered mx-4">
          <div className="column is-4">
            <h1 className="is-size-4 has-text-white">Find accomodation from anywhere</h1>
            <p className="is-size-5 has-text-white my-6">
              The best offers for you at any point of your journey.
              Wherever you are, feel yourself like at your own home
            </p>
            <Link to="/signin" className="button is-rounded start-free-btn is-uppercase">Start free</Link>
          </div>
        </div>
      </div>

      <footer className="is-centered is-vcentered has-text-centered">
        <p className="my-2 is-size-7">Rwanda, Western, Rubavu, Gisenyi</p>
        <p className="my-2 is-size-7">+250701234567</p>
        <div className="grid-3-col my-2">
          <div className="mx-2"><a href="https://www.facebook.com/"><FaFacebook /></a></div>
          <div className="mx-2"><a href="https://twitter.com/"><FaTwitter /></a></div>
          <div className="mx-2"><a href="https://www.instagram.com/"><FaInstagram /></a></div>
        </div>
        <p className="my-2 is-size-7">CoolAccommodation 2021. All right reserved</p>
      </footer>
    </div>
  );
};

HomePage.propTypes = {
  getAccommodationProfile: PropTypes.func.isRequired,
  // allFavourites: PropTypes.arrayOf().isRequired,
};

const mapStateToProps = state => ({ allFavourites: state.favouritesReducer });

export default connect(mapStateToProps, { getAccommodationProfile })(HomePage);
