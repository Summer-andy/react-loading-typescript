import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { CircleLoading } from '../src';

storiesOf('CircleLoading', module)
  .addDecorator(withKnobs)
  .add('CircleLoading', () => {
    return <CircleLoading />;
  });
