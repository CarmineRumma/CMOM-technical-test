// created by Carmine Rumma <carmine_rumma@epam.com> at 20220207 09:56.
// 
// 

import React, { ReactElement } from 'react';
import { Dimmer, Loader } from 'semantic-ui-react';

interface Props {
  name?: string;
}

export default function LoadingSpinner(props: Props): ReactElement {
  return (
    <Dimmer active inverted>
      <Loader size="large">Loading {props.name || 'content'}</Loader>
    </Dimmer>
  );
}
