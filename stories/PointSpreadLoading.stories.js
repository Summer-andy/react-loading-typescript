import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { PointSpreadLoading } from '../src';

storiesOf('PointSpreadLoading', module)
  .addDecorator(withKnobs)
  .add('PointSpreadLoading', () => {
    return <PointSpreadLoading />;
  });
