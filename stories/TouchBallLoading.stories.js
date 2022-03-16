import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { TouchBallLoading } from '../src';

storiesOf('TouchBallLoading', module)
  .addDecorator(withKnobs)
  .add('TouchBallLoading', () => {
    return <TouchBallLoading />;
  });
