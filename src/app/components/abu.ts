import type { Meta, StoryObj } from '@storybook/angular';
import { applicationConfig, moduleMetadata } from '@storybook/angular';
import { AuthorityCard } from '../lib';

const meta: Meta<AuthorityCard> = {
  title: 'Components/AuthorityCard',
  component: AuthorityCard,
  decorators: [
    moduleMetadata({
      imports: [AuthorityCard],
    }),
    applicationConfig({
      providers: [],
    }),
  ],
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
A card component used to display Authority / Country information, including flag,
authority name, ISO code, protection details, and contact information.

## Usage in Consumer App

\`\`\`ts
import { AuthorityCard } from 'upov-ui';

@Component({
  imports: [AuthorityCard],
  template: \`
    <upov-authority-card
      [flag]="'https://flagcdn.com/w80/fr.png'"
      [countryName]="'France'"
      [isoCode]="'FR'"
      [authorityName]="'INOV'"
      [totalSpecies]="342"
      [coverageType]="'All genera and species'"
      [email]="'contact@inov.fr'"
      [website]="'https://www.inov.fr'">
    </upov-authority-card>
  \`
})
export class MyComponent {}
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    flag: {
      control: 'text',
      description: 'URL of the country flag image',
    },
    countryName: {
      control: 'text',
      description: 'Country name',
    },
    isoCode: {
      control: 'text',
      description: 'ISO country code',
    },
    authorityName: {
      control: 'text',
      description: 'Official authority name',
    },
    totalSpecies: {
      control: 'number',
      description: 'Total number of protected taxa',
    },
    coverageType: {
      control: 'text',
      description: 'Type of protection coverage',
    },
    phone: {
      control: 'text',
      description: 'Contact phone number',
    },
    email: {
      control: 'text',
      description: 'Contact email address',
    },
    website: {
      control: 'text',
      description: 'Authority website URL',
    },
  },
};

export default meta;
type Story = StoryObj<AuthorityCard>;

/**
 * Complete authority card with all fields filled.
 */
export const Complete: Story = {
  args: {
    flag: 'https://flagcdn.com/w80/fr.png',
    countryName: 'France',
    isoCode: 'FR',
    authorityName: 'INOV – Instance Nationale des Obtentions Végétales',
    totalSpecies: 342,
    coverageType: 'All genera and species',
    phone: '+33 1 23 45 67 89',
    email: 'contact@inov.fr',
    website: 'https://www.inov.fr',
  },
};

/**
 * Minimal authority card.
 */
export const Minimal: Story = {
  args: {
    countryName: 'Germany',
    isoCode: 'DE',
    authorityName: 'Bundessortenamt',
  },
};

/**
 * Authority card without flag (fallback state).
 */
export const NoFlag: Story = {
  args: {
    countryName: 'European Union',
    isoCode: 'EU',
    authorityName: 'Community Plant Variety Office (CPVO)',
    totalSpecies: 1800,
    coverageType: 'Community protection',
  },
};

/**
 * Authority card without contact details.
 */
export const NoContactInfo: Story = {
  args: {
    flag: 'https://flagcdn.com/w80/it.png',
    countryName: 'Italy',
    isoCode: 'IT',
    authorityName: 'Ufficio Italiano Brevetti e Marchi',
    totalSpecies: 210,
  },
};

/**
 * Authority card with long authority name to test truncation.
 */
export const LongText: Story = {
  args: {
    flag: 'https://flagcdn.com/w80/es.png',
    countryName: 'Spain',
    isoCode: 'ES',
    authorityName:
      'Oficina Española de Variedades Vegetales y Protección de Obtenciones Vegetales',
    totalSpecies: 415,
    coverageType: 'National protection scheme for agricultural and ornamental plants',
    email: 'info@mapa.es',
    website: 'https://www.mapa.gob.es',
  },
};

/**
 * Multiple authority cards in a grid layout.
 */
export const GridLayout: Story = {
  render: () => ({
    template: `
      <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(360px, 1fr)); gap: 16px; padding: 16px;">
        <upov-authority-card
          flag="https://flagcdn.com/w80/fr.png"
          countryName="France"
          isoCode="FR"
          authorityName="INOV"
          totalSpecies="342"
          coverageType="All genera and species"
        ></upov-authority-card>

        <upov-authority-card
          flag="https://flagcdn.com/w80/de.png"
          countryName="Germany"
          isoCode="DE"
          authorityName="Bundessortenamt"
          totalSpecies="510"
        ></upov-authority-card>

        <upov-authority-card
          countryName="European Union"
          isoCode="EU"
          authorityName="CPVO"
          totalSpecies="1800"
          coverageType="Community protection"
        ></upov-authority-card>

        <upov-authority-card
          flag="https://flagcdn.com/w80/nl.png"
          countryName="Netherlands"
          isoCode="NL"
          authorityName="Board for Plant Varieties"
          totalSpecies="260"
        ></upov-authority-card>
      </div>
    `,
  }),
};

/**
 * Authority card in a narrow container (responsive test).
 */
export const NarrowContainer: Story = {
  render: () => ({
    template: `
      <div style="max-width: 420px; padding: 16px; border: 1px dashed #ccc;">
        <upov-authority-card
          flag="https://flagcdn.com/w80/fr.png"
          countryName="France"
          isoCode="FR"
          authorityName="INOV"
          totalSpecies="342"
          coverageType="All genera and species"
        ></upov-authority-card>
      </div>
    `,
  }),
};
