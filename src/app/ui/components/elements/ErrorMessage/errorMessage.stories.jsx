import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { ErrorMessage } from './index';
import '../../../../../assets/index.css';

const stories = storiesOf('Error Message', module);

stories.add(
  'Normal',
  () => <ErrorMessage>Super errore</ErrorMessage>
);


stories.add(
  'Icon',
  () => <ErrorMessage color="#03f4af">Cliccami</ErrorMessage>
);
