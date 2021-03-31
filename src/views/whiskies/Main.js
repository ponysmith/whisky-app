import React from 'react';
import { BrowserRouter as Router, Switch, Route, useRouteMatch } from 'react-router-dom';

import Details from './Details';
import List from './List';

export const Whiskies = () => {
  const match = useRouteMatch();

  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route 
            path={`${match.path}/:id`} 
            component={Details} 
            />      
          <Route 
            path={`${match.path}`}
            component={List}
            />
        </Switch>
      </Router>
    </React.Fragment>
  )
}
  
export default Whiskies;
  