import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import jwt from 'jsonwebtoken';
import { useEffect } from 'react';
import { getAllAccommodations } from '../redux/actions';

const AccommodationPage = ({ token, getAllAccommodations }) => {
  let decodedToken = '';
  try {
    decodedToken = jwt.decode(token);
    useEffect(() => getAllAccommodations(token), []);
  } catch (err) {
    console.log(err);
  }
  console.log(decodedToken);
  const renderedComponent = token
    ? (
      <h1>
        Hello this is my id
        {decodedToken.id}
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
  getAllAccommodations: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  token: state.loginReducer.token,
});

export default connect(mapStateToProps, { getAllAccommodations })(AccommodationPage);
