import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { AuthorityCard } from '../lib/authority-card/authority-card.component';
import { MatIconModule } from '@angular/material/icon';

const meta: Meta<AuthorityCard> = {
  title: 'Components/AuthorityCard',
  component: AuthorityCard,
  decorators: [
    moduleMetadata({
      imports: [
        AuthorityCard,
        MatIconModule, // 🔥 REQUIRED
      ],
    }),
  ],
};

export default meta;

type Story = StoryObj<AuthorityCard>;

export const Basic: Story = {
  args: {
    countryName: 'France',
    isoCode: 'FR',
    authorityName: 'INOV',
    totalSpecies: 342,
  },
};
