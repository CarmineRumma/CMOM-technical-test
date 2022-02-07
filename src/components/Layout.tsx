// created by Carmine Rumma <carmine_rumma@epam.com> at 20220207 09:53.
// 
// 

import React, { ReactElement } from 'react';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import { Container, Icon, Menu } from 'semantic-ui-react';
import Footer from './Footer';

interface Props {
  children: ReactElement;
}

export default function Layout(props: Props): ReactElement {
  return (
    <Router>
      <Menu
        className="fixed inverted"
        id="divide"
      
      >
        <NavLink to="/coins" className="item" >
          <Icon name="bitcoin" />
          Coins
        </NavLink>
      </Menu>
      <Container className='main'>{props.children}</Container>
      <Footer />
    </Router>
  );
}
