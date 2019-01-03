import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from './index';

const stories = storiesOf('Button', module);

stories.add(
  'Normal',
  () => <Button>Cliccami</Button>
);


stories.add(
  'Custom color',
  () => <Button color="#03f4af">Cliccami</Button>
);
