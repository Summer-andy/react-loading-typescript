import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { DisappearedLoading } from '../src';

storiesOf('DisappearedLoading', module)
  .addDecorator(withKnobs)
  .add('DisappearedLoading', () => {
    return <DisappearedLoading />;
  });
