/* eslint-disable jsx-a11y/control-has-associated-label */
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import accommodationPic from '../assets/images/accommodation-2.jpg';
import logoUrl from '../assets/images/accommodation-logo.svg';

const HomePage = () => (
  <div>
    <div className="home-page-1">
      <nav className="columns p-6">
        <div className="column is-half">
          <div className="columns">
            <img src={logoUrl} alt="cool accommodation logo" className="image is-24x24 is-rounded" />
            <h2 className="is-size-5 has-text-white">CoolAccommodation</h2>
          </div>
        </div>
        <div className="column is-half">
          <div className="columns is-pulled-right">
            <div className="column is-2 mx-5">
              <button className="button is-dark is-rounded mx-2 is-uppercase" type="button">Sign In</button>
            </div>
            <div className="column is-2 mx-5">
              <button className="button is-dark is-rounded mx-2 is-uppercase" type="button">Sign Up</button>
            </div>
          </div>
        </div>
      </nav>
      <div className="columns is-vcentered m-6">
        <div className="column is-4">
          <h1 className="is-size-2 has-text-white">Find accomodation from anywhere</h1>
          <p className="is-size-5 has-text-white my-6">
            The best offers for you at any point of your journey.
            Wherever you are, feel yourself like at your own home
          </p>
          <button type="button" className="button is-rounded start-free-btn is-uppercase">Start free</button>
        </div>
      </div>
    </div>
    <div className="columns is-vcentered is-centered home-page-2">
      <div className="column is-3">
        <img src={accommodationPic} alt="neza guest house" />
        <div className="columns is-centered is-vcentered">
          <h4 className="column is-half">Neza Guest House</h4>
          <h4 className="column is-half is-pulled-right">$ 1221 / per month</h4>
        </div>
      </div>
      <div className="column is-7 p-6">
        <h1 className="is-size-2">Only best places for your rest</h1>
        <p className="is-size-5 my-6">
          More than ten thousand accommodations at your disposal.
          Only the best and checked landlords.
          We will find best places for you and the conditions
          for a safe transaction and comfortable stay.
        </p>
        <button type="button" className="start-free-btn button is-rounded is-uppercase">Trending accommodations</button>
      </div>
    </div>
    <div className="columns is-centered is-vcentered home-page-before-footer">
      <div className="column is-2 is-centered has-text-centered">
        <h2 className="has-text-white my-3">Be everywhere at home</h2>
        <button type="button" className="start-free-btn button is-rounded is-uppercase">Start free</button>
      </div>
    </div>
    <footer className="is-centered is-vcentered has-text-centered">
      <div className="columns my-3 is-centered is-vcentered">
        <img src={logoUrl} alt="cool accommodation logo" className="image is-24x24 is-rounded" />
        <h2 className="is-size-5">CoolAccommodation</h2>
      </div>
      <p className="my-2 is-size-7">Rwanda, Western, Rubavu, Gisenyi</p>
      <p className="my-2 is-size-7">+250701234567</p>
      <div className="columns is-centered is-vcentered my-2">
        <div className="is-one-third is-size-3 mx-2"><a href="https://www.facebook.com/"><FaFacebook /></a></div>
        <div className="is-one-third is-size-3 mx-2"><a href="https://twitter.com/"><FaTwitter /></a></div>
        <div className="is-one-third is-size-3 mx-2"><a href="https://www.instagram.com/"><FaInstagram /></a></div>
      </div>
      <p className="my-2 is-size-7">CoolAccommodation 2021. All right reserved</p>
    </footer>
  </div>
);

export default HomePage;
