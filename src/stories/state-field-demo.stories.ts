import { Meta, StoryObj } from '@storybook/angular';
import { StateFieldDemoComponent } from './state-field-demo.component';

const meta: Meta<StateFieldDemoComponent> = {
  title: 'Form Fields/State & Notes',
  component: StateFieldDemoComponent,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### State & Notes Form Fields

This component demonstrates **two Angular Material form fields**:

- **State of Expression** – Text input using \`matInput\`
- **Notes** – Dropdown selection using \`mat-select\`

Both fields use:
- \`appearance="outline"\`
- \`ngModel\` for two-way binding
- Angular Material best practices

This is the **same usage pattern as in the main application component**.
        `
      }
    }
  }
};

export default meta;

type Story = StoryObj<StateFieldDemoComponent>;

export const Default: Story = {};
