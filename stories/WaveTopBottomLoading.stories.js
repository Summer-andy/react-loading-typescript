import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { WaveTopBottomLoading } from '../src';

storiesOf('WaveTopBottomLoading', module)
  .addDecorator(withKnobs)
  .add('WaveTopBottomLoading', () => {
    return <WaveTopBottomLoading />;
  });
