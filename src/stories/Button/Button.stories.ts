import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

const meta = {
  title: 'Example/Button',
  component: Button,
  tags: ['autodocs']
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Filled: Story = {
  args: {
    variant: 'filled',
    label: 'Button'
  }
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    label: 'Button'
  }
};

export const Text: Story = {
  args: {
    variant: 'text',
    label: 'Button'
  }
};
