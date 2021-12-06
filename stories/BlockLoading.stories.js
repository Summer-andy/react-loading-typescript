import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { BlockReserveLoading } from '../src';

storiesOf('BlockReserveLoading', module)
  .addDecorator(withKnobs)
  .add('BlockReserveLoading', () => {
    return <BlockReserveLoading />;
  });
