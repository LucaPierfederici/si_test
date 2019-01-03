import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Link } from './index';
import '../../../../../assets/index.css';

const stories = storiesOf('Link', module);

stories.add(
  'Button',
  () => <Link />
);

