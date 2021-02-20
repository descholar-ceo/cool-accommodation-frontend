import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { useEffect } from 'react';

const AccommodationPage = ({ token }) => {
  const renderedComponent = token ? (
    <h1>
      Hello this is my id
      {token}
    </h1>
  ) : (<h1>Login first</h1>);
  return (
    { renderedComponent }
  );
};

AccommodationPage.propTypes = {
  token: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  token: state.loginReducer.token,
});

export default connect(mapStateToProps, null)(AccommodationPage);
