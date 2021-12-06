import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { LadderLoading } from '../src';

storiesOf('LadderLoading', module)
  .addDecorator(withKnobs)
  .add('LadderLoading', () => {
    return <LadderLoading />;
  });
