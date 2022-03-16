import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { HeartBoomLoading } from '../src';

storiesOf('HeartBoomLoading', module)
  .addDecorator(withKnobs)
  .add('HeartBoomLoading', () => {
    return <HeartBoomLoading />;
  });
