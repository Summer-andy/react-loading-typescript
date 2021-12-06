import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { CommonLoading } from '../src';

storiesOf('CommonLoading', module)
  .addDecorator(withKnobs)
  .add('CommonLoading', () => {
    return <CommonLoading />;
  });
