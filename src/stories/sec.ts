import type { Meta, StoryObj } from '@storybook/angular';
import { applicationConfig, moduleMetadata } from '@storybook/angular';
import { provideAnimations } from '@angular/platform-browser/animations';
import { AuthorityCard } from '../lib/components/authority-card/authority-card';

const meta: Meta<AuthorityCard> = {
  title: 'Components/AuthorityCard',
  component: AuthorityCard,
  decorators: [
    moduleMetadata({
      imports: [AuthorityCard],
    }),
    applicationConfig({
      providers: [provideAnimations()],
    }),
  ],
};

export default meta;

type Story = StoryObj<AuthorityCard>;

export const Complete: Story = {
  args: {
    countryName: 'France',
    countryIso: 'FR',
    flagUrl: 'https://flagcdn.com/w80/fr.png',
    authorityName: 'INOV',
    department: 'National Office for Plant Varieties',
    phone: '+33 1 23 45 67 89',
    email: 'contact@inov.fr',
    website: 'https://www.inov.fr',
    coverageType: 'All genera and species',
    memberSince: '1961',
  },
};
