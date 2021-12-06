import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {withKnobs} from '@storybook/addon-knobs';
import {BabelLoading} from '../src';

storiesOf('BabelLoading', module)
    .addDecorator(withKnobs)
    .add('BabelLoading', () => {
        return (
            <BabelLoading/>
        );
    });
