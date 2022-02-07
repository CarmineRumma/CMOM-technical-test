// created by Carmine Rumma <carmine_rumma@epam.com> at 20220207 09:23.
// 
// 

import React, { ReactElement } from 'react';

import AppRoutes from './components/Routes';
import Layout from './components/Layout';

export default function App(): ReactElement {
  return (
    <Layout>
      <AppRoutes />
    </Layout>
  );
}
