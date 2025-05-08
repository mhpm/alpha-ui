import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { BUTTON_VARIANTS, BUTTON_COLORS, BUTTON_SIZES } from './button.types';
import Button from '.';

type ButtonProps = React.ComponentProps<typeof Button>;
const variantSummary = BUTTON_VARIANTS.map((v) => `'${v}'`).join(' | ');
const colorSummary = BUTTON_COLORS.map((c) => `'${c}'`).join(' | ');
const sizeSummary = BUTTON_SIZES.map((s) => `'${s}'`).join(' | ');

const meta: Meta<ButtonProps> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  argTypes: {
    onClick: { action: 'clicked' },
    variant: {
      control: { type: 'select' },
      options: BUTTON_VARIANTS,
      table: { type: { summary: variantSummary } },
    },
    color: {
      control: { type: 'select' },
      options: BUTTON_COLORS,
      table: { type: { summary: colorSummary } },
    },
    size: {
      control: { type: 'select' },
      options: BUTTON_SIZES,
      table: { type: { summary: sizeSummary } },
    },
    disabled: {
      control: 'boolean',
      table: { type: { summary: 'boolean' } },
    },
    type: {
      control: false,
      table: {
        type: { summary: `'button' | 'submit' | 'reset'` },
        defaultValue: { summary: `'button'` },
      },
    },
  },
};

export default meta;

type Story = StoryObj<ButtonProps>;

export const Default: Story = {
  args: { children: 'Button' },
  render: (args: ButtonProps) => <Button {...args} />,
};

export const Variants: Story = {
  args: { children: 'Button' },
  render: (args: ButtonProps) => (
    <div className="flex flex-wrap gap-2">
      {BUTTON_VARIANTS.map((v) => (
        <Button key={v} {...args} variant={v}>
          {v}
        </Button>
      ))}
    </div>
  ),
};

export const Colors: Story = {
  args: { children: 'Button' },
  render: (args: ButtonProps) => (
    <div className="flex flex-wrap gap-2">
      {BUTTON_COLORS.map((c) => (
        <Button key={c} {...args} color={c}>
          {c}
        </Button>
      ))}
    </div>
  ),
};

export const Sizes: Story = {
  args: { children: 'Button' },
  render: (args: ButtonProps) => (
    <div className="flex flex-wrap gap-2">
      {BUTTON_SIZES.map((s) => (
        <Button key={s} {...args} size={s}>
          {s}
        </Button>
      ))}
    </div>
  ),
};

export const Disabled: Story = {
  args: { children: 'Disabled', disabled: true },
  render: (args: ButtonProps) => <Button {...args} />,
};
