import loadingIcon from '../assets/images/loading-icon.gif';

const Loading = () => (
  <div className="columns is-centered is-vcentered">
    <div className="column is-4">
      <img src={loadingIcon} alt="Loading component" />
    </div>
  </div>
);

export default Loading;
