import { Route, Switch } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import Fourofourpage from '../pages/Fourofourpage';
import LoginPage from '../pages/LoginPage';
import SignupPage from '../pages/SignupPage';
import AccommodationPage from '../pages/AccommodationsPage';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route exact path="/signin" component={LoginPage} />
    <Route exact path="/signup" component={SignupPage} />
    <Route exact path="/accommodations" component={AccommodationPage} />
    <Route component={Fourofourpage} />
  </Switch>
);

export default Routes;
