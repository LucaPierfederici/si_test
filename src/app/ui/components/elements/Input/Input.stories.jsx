import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Input } from './index';
import '../../../../../assets/index.css';

const stories = storiesOf('Input', module);

stories.add(
  'Normal',
  () => <Input  placeholder="Text"/>
);


stories.add(
  'Custom color',
  () => <Input color="#ff0000" placeholder="Text"/>
);
