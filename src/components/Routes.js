import { Route, Switch } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import Fourofourpage from '../pages/Fourofourpage';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route component={Fourofourpage} />
  </Switch>
);

export default Routes;
