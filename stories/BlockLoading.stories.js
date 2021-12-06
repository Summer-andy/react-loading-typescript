import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {withKnobs} from '@storybook/addon-knobs';
import {BlockLoading} from '../src';

storiesOf('BlockLoading', module)
    .addDecorator(withKnobs)
    .add('BlockLoading', () => {
        return (
            <BlockLoading/>
        );
    });
