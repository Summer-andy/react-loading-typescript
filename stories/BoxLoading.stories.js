import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { BoxLoading } from '../src';

storiesOf('BoxLoading', module)
  .addDecorator(withKnobs)
  .add('BoxLoading', () => {
    return <BoxLoading />;
  });
