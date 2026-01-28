import { Meta, StoryObj } from '@storybook/angular';
import { Page } from '../app/components/page/page';

const meta: Meta<Page> = {
  title: 'Pages/Edit Characteristics',
  component: Page,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<Page>;

// --------------------------------------------------
// 1️⃣ BASIC – default page (app default state)
// --------------------------------------------------
export const Basic: Story = {
  name: 'Basic Page',
  args: {
    // default values component-la irukkaradhe use aagum
  },
};

// --------------------------------------------------
// 2️⃣ EMPTY FORM – no states, no name
// --------------------------------------------------
export const EmptyForm: Story = {
  name: 'Empty Form',
  args: {
    characteristicName: '',
    expressionType: '',
    growthStage: '',
    stateExpressions: [],
    explanation: '',
  },
};

// --------------------------------------------------
// 3️⃣ MINIMAL STATE – one state only
// --------------------------------------------------
export const SingleState: Story = {
  name: 'Single State',
  args: {
    stateExpressions: [
      {
        state: 'Leaf length',
        notes: '1',
        varieties: ['A', 'B'],
      },
    ],
  },
};

// --------------------------------------------------
// 4️⃣ CHECKBOX VARIATIONS
// --------------------------------------------------
export const WithoutSpecificFunctions: Story = {
  name: 'Without Specific Functions',
  args: {
    astericsChecked: false,
    groupingChecked: false,
    tq5Checked: false,
  },
  
};
