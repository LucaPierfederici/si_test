import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Card } from './index';
import '../../../../../assets/index.css';

const stories = storiesOf('Card', module);

stories.add(
  'Normal',
  () => <Card><p>poewjfpoewjf</p></Card>
);
