import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import jwt from 'jsonwebtoken';
// import { useEffect } from 'react';

const AccommodationPage = ({ token }) => {
  let decodedToken = '';
  try {
    decodedToken = jwt.decode(token);
  } catch (err) {
    console.log(err);
  }
  console.log(decodedToken);
  const renderedComponent = token
    ? (
      <h1>
        Hello this is my id
        {/* decodedToken */}
      </h1>
    )
    : <h1>Login first</h1>;
  return (
    <div>
      { renderedComponent }
    </div>
  );
};

AccommodationPage.propTypes = {
  token: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  token: state.loginReducer.token,
});

export default connect(mapStateToProps, null)(AccommodationPage);
