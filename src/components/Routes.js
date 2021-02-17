import { Route, Switch } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import Fourofourpage from '../pages/Fourofourpage';
import LoginPage from '../pages/LoginPage';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route exact path="/login" component={LoginPage} />
    <Route component={Fourofourpage} />
  </Switch>
);

export default Routes;
