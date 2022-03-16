import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { StickyBallLoading } from '../src';

storiesOf('StickyBallLoading', module)
  .addDecorator(withKnobs)
  .add('StickyBallLoading', () => {
    return <StickyBallLoading />;
  });
