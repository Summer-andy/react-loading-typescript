import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { NineCellLoading } from '../src';

storiesOf('NineCellLoading', module)
  .addDecorator(withKnobs)
  .add('NineCellLoading', () => {
    return <NineCellLoading />;
  });
