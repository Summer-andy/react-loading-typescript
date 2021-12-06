import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { SemipolarLoading } from '../src';

storiesOf('SemipolarLoading', module)
  .addDecorator(withKnobs)
  .add('SemipolarLoading', () => {
    return <SemipolarLoading />;
  });
