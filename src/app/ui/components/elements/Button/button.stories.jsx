import * as React from 'react';
import { storiesOf } from '@storybook/react';
import '../../../../../assets/index.css';
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

stories.add(
  'Float',
  () => <Button right>Cliccami</Button>
);

stories.add(
  'Uppercase',
  () => <Button uppercase>Cliccami</Button>
);