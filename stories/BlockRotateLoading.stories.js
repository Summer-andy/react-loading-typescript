import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { BlockRotateLoading } from '../src';

storiesOf('BlockRotateLoading', module)
  .addDecorator(withKnobs)
  .add('BlockRotateLoading', () => {
    return <BlockRotateLoading />;
  });
