import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { BatteryLoading } from '../src/index.ts';
storiesOf('BatteryLoading', module)
  .addDecorator(withKnobs)
  .add('BatteryLoading', () => {
    return (
      <BatteryLoading />
    );
  });
