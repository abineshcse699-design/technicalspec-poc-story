import type { Meta, StoryObj } from '@storybook/angular';
import { Footer } from './footer';

const meta: Meta<Footer> = {

  title: 'Components/Footer',
  component: Footer,
  tags: ['autodocs'],
  render: (args: Footer) => ({
    props: args,
  }),
  argTypes: {
    lang: {
      control: {
        type: 'select',
      },
      options: ['en', 'fr', 'es', 'de'],
    },
  },
};

export default meta;

type Story = StoryObj<Footer>;

export const Default: Story = {
  args: {
    lang: 'en',
  },
};

export const English: Story = {
  args: {
    lang: 'en',
  },
};

export const French: Story = {
  args: {
    lang: 'fr',
  },
};

export const Spanish: Story = {
  args: {
    lang: 'es',
  },
};

export const German: Story = {

  args: {

    lang: 'de',

  },

};


