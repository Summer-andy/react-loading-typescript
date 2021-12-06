import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { ThreeHorseLoading } from '../src';

storiesOf('ThreeHorseLoading', module)
  .addDecorator(withKnobs)
  .add('ThreeHorseLoading', () => {
    return <ThreeHorseLoading />;
  });
