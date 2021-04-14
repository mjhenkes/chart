import React from 'react';
import ApplicationBase from '@cerner/terra-application';
import ApplicationContainer from '@cerner/terra-application/lib/application-container/ApplicationContainer';
import DemoApplication from './demo-application/DemoApplication';

const Application = () => (
  <ApplicationBase>
    <ApplicationContainer applicationName="Chart" applicationVersion="0.0.0">
      <DemoApplication />
    </ApplicationContainer>
  </ApplicationBase>
);

export default Application;
