import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { DiamondLoading } from '../src';

storiesOf('DiamondLoading', module)
  .addDecorator(withKnobs)
  .add('DiamondLoading', () => {
    return <DiamondLoading />;
  });
