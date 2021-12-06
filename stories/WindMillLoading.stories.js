import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { WindMillLoading } from '../src';

storiesOf('WindMillLoading', module)
  .addDecorator(withKnobs)
  .add('WindMillLoading', () => {
    return <WindMillLoading />;
  });
