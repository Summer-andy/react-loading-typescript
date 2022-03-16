import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { PassThrouthLoading } from '../src';

storiesOf('PassThrouthLoading', module)
  .addDecorator(withKnobs)
  .add('PassThrouthLoading', () => {
    return <PassThrouthLoading />;
  });
