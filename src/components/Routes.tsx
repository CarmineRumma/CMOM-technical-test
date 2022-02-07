// created by Carmine Rumma <carmine_rumma@epam.com> at 20220207 09:53.
// 
// 

import React, { ReactElement } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import CoinDetails from './CoinDetails';
import CoinsMarketList from './CoinsMarketList';

export default function Routes(): ReactElement {
  return (
    <>
      <ScrollToTop />
      <Switch>
        <Route path="/coins/:coinId">
          <CoinDetails />
        </Route>
        <Route path="/coins" >
            <CoinsMarketList />
        </Route>
        <Route exact path="">
          <Redirect to="/coins" />
        </Route>
      </Switch>
    </>
  );
}
