import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { SolarSystemLoading } from '../src';

storiesOf('SolarSystemLoading', module)
  .addDecorator(withKnobs)
  .add('SolarSystemLoading', () => {
    return <SolarSystemLoading />;
  });
