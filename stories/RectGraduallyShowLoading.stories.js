import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { RectGraduallyShowLoading } from '../src';

storiesOf('RectGraduallyShowLoading', module)
  .addDecorator(withKnobs)
  .add('RectGraduallyShowLoading', () => {
    return <RectGraduallyShowLoading />;
  });
