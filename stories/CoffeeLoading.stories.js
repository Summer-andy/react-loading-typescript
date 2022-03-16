import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { CoffeeLoading } from '../src';

storiesOf('CoffeeLoading', module)
  .addDecorator(withKnobs)
  .add('CoffeeLoading', () => {
    return <CoffeeLoading />;
  });
