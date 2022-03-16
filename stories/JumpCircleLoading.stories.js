import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { JumpCircleLoading } from '../src';

storiesOf('JumpCircleLoading', module)
  .addDecorator(withKnobs)
  .add('JumpCircleLoading', () => {
    return <JumpCircleLoading />;
  });
