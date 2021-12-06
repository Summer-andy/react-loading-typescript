import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { WaveLoading } from '../src';

storiesOf('WaveLoading', module)
  .addDecorator(withKnobs)
  .add('WaveLoading', () => {
    return <WaveLoading />;
  });
