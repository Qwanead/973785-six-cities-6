import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';

import SvgIcons from '../svg-icons/svg-icons';
import Main from '../main/main';
import Favorites from '../favorites/favorites';
import Login from '../login/login';
import NotFound from '../not-found/not-found';
import Offer from '../offer/offer';
import appPropTypes from './app.prop-types';

const App = (props) => {
  const {cards} = props;

  return (
    <>
      <SvgIcons />
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Main cards={cards} />
          </Route>
          <Route exact path="/favorites">
            <Favorites />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/offer/:id?">
            <Offer />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};

App.propTypes = appPropTypes;

export default App;
