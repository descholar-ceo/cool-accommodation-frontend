import { BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { getAllFavouritesAction } from '../redux/actions';
import Routes from './Routes';

const App = ({ getAllFavouritesAction }) => {
  useEffect(() => getAllFavouritesAction(), []);
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
};

App.propTypes = {
  getAllFavouritesAction: PropTypes.func.isRequired,
};

export default connect(null, { getAllFavouritesAction })(App);
