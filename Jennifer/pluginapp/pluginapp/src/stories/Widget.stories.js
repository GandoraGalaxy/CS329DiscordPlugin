import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';

export default {
  title: 'Widget',
};

export const test = () => <Button onClick={action('clicked')}>Hello Button</Button>;
