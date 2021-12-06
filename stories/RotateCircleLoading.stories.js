import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { RotateCircleLoading } from '../src';

storiesOf('RotateCircleLoading', module)
  .addDecorator(withKnobs)
  .add('RotateCircleLoading', () => {
    return <RotateCircleLoading />;
  });
