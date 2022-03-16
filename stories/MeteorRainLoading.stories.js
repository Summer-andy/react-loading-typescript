import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { MeteorRainLoading } from '../src';

storiesOf('MeteorRainLoading', module)
  .addDecorator(withKnobs)
  .add('MeteorRainLoading', () => {
    return <MeteorRainLoading />;
  });
