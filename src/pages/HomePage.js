import accommodationPic from '../assets/images/accommodation-2.jpg';

const HomePage = () => (
  <div>
    <div className="columns is-vcentered home-page-1">
      <div className="column is-4 m-6">
        <h1 className="is-size-2 has-text-white">Find accomodation from anywhere</h1>
        <p className="is-size-5 has-text-white my-6">
          The best offers for you at any point of your journey.
          Wherever you are, feel yourself like at your own home
        </p>
        <button type="button" className="button is-rounded start-free-btn is-uppercase">Start free</button>
      </div>
    </div>
    <div className="columns is-vcentered is-centered home-page-2">
      <div className="column is-3">
        <img src={accommodationPic} alt="neza guest house" />
        <h4>Neza Guest House</h4>
      </div>
      <div className="column is-7 p-6">
        <h1 className="is-size-2">Only best places for your rest</h1>
        <p className="is-size-5 my-6">
          More than ten thousand accommodations at your disposal.
          Only the best and checked landlords.
          We will find best places for you and the conditions
          for a safe transaction and comfortable stay.
        </p>
        <button type="button" className="start-free-btn button is-rounded is-uppercase">Start free</button>
      </div>
    </div>
  </div>
);

export default HomePage;
