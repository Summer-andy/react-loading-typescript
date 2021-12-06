import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { LoopCircleLoading } from '../src';

storiesOf('LoopCircleLoading', module)
  .addDecorator(withKnobs)
  .add('LoopCircleLoading', () => {
    return <LoopCircleLoading />;
  });
