import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { TransverseLoading } from '../src';

storiesOf('TransverseLoading', module)
  .addDecorator(withKnobs)
  .add('TransverseLoading', () => {
    return <TransverseLoading />;
  });
