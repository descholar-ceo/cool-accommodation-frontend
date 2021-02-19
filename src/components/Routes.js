import { Route, Switch } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import Fourofourpage from '../pages/Fourofourpage';
import LoginPage from '../pages/LoginPage';
import SignupPage from '../pages/SignupPage';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route exact path="/signin" component={LoginPage} />
    <Route exact path="/signup" component={SignupPage} />
    <Route component={Fourofourpage} />
  </Switch>
);

export default Routes;
