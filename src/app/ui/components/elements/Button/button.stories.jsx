import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from './index';

const stories = storiesOf('Button', module);

stories.add(
  'normal',
  () => <Button><p>poewjfpoewjf</p></Button>
);


stories.add(
  'custom color',
  () => <Button color="#ff0000"><p>poewjfpoewjf</p></Button>
);
