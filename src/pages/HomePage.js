import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const HomePage = () => (
  <div className="home-page-1">
    <Navbar bg="none" />
    <div className="columns is-vcentered mx-4 my-2">
      <div className="column is-4">
        <h1 className="is-size-5 has-text-white">Find accomodation from anywhere</h1>
        <p className="is-size-6 has-text-white my-4">
          The best offers for you at any point of your journey.
          Wherever you are, feel yourself like at your own home
        </p>
        <Link to="/signin" className="button is-rounded start-free-btn is-uppercase">Explore accommodations</Link>
      </div>
    </div>
    <Footer mClass="fixed-elt" />
  </div>
);

export default HomePage;
