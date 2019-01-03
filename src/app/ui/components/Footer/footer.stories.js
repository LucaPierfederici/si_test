import React from 'react';
import { storiesOf } from '@storybook/react';
import Footer from '.';

const stories = storiesOf('Footer', module);

stories.add(
  'Normal',
  () => (
    <Footer
      items={['Lang 1', 'Lang 2']}
      onSelect={item => console.log(item)} />
  ))