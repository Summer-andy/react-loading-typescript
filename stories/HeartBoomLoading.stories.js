import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { EatLoading } from '../src';

storiesOf('EatLoading', module)
  .addDecorator(withKnobs)
  .add('EatLoading', () => {
    return <EatLoading />;
  });
