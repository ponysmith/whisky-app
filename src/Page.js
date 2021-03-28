import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import Whiskies from './views/whiskies/Main';
import "./page.scss";

export const Page = () => {


  return (
    <div id="page-container">
      <div id="page-content">
        <Router>
          <Switch>
            <Route path="/whiskies" component={Whiskies} />
            <Route exact path="/">
              <Redirect to="/whiskies" />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  )
}

export default Page