import type {Meta, StoryObj} from '@storybook/angular';
import {applicationConfig, moduleMetadata} from '@storybook/angular';
import {AuthorityCard} from '../lib';

const meta: Meta<AuthorityCard> = {
  title: 'Components/AuthorityCard',
  component: AuthorityCard,
  decorators: [
    moduleMetadata({
      imports: [
        AuthorityCard
      ]
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
A card component designed to display authority/country information with flag, name, ISO code, and contact details.

## Usage in Consumer App

\`\`\`typescript
import { AuthorityCard } from 'upov-ui';

@Component({
  imports: [AuthorityCard],
  template: \`
    <upov-authority-card
      [authorityName]="'United States of America'"
      [isoCode]="'US'"
      [flagUrl]="'https://flagcdn.com/w80/us.png'"
      [registrar]="'United States Patent and Trademark Office'"
      [department]="'Plant Variety Protection Office'"
      [phone]="'+1 571-272-8400'"
      [email]="'pvpo@usda.gov'"
      [website]="'https://www.ams.usda.gov/services/plant-variety-protection'"
      [memberSince]="'1981'"
      [totalSpecies]="350"
      [badge]="'UPOV Member'">
    </upov-authority-card>
  \`
})
export class MyComponent {}
\`\`\`

### Required Imports
- \`AuthorityCard\` from 'upov-ui'
        `,
      },
    },
  },
  argTypes: {
    authorityName: {
      control: 'text',
      description: 'Full name of the authority/country',
    },
    isoCode: {
      control: 'text',
      description: 'ISO country code (2 letters)',
    },
    flagUrl: {
      control: 'text',
      description: 'URL of the country flag image',
    },
    registrar: {
      control: 'text',
      description: 'Name of the registrar organization',
    },
    department: {
      control: 'text',
      description: 'Department or office name',
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
    memberSince: {
      control: 'text',
      description: 'Year joined UPOV (if applicable)',
    },
    totalSpecies: {
      control: 'number',
      description: 'Total number of species protected',
    },
    badge: {
      control: 'text',
      description: 'Badge text displayed in the top right',
    },
  },
};

export default meta;
type Story = StoryObj<AuthorityCard>;

/**
 * Complete authority card with all properties filled in.
 */
export const Complete: Story = {
  args: {
    authorityName: 'United States of America',
    isoCode: 'US',
    flagUrl: 'https://flagcdn.com/w80/us.png',
    registrar: 'United States Patent and Trademark Office',
    department: 'Plant Variety Protection Office',
    phone: '+1 571-272-8400',
    email: 'pvpo@usda.gov',
    website: 'https://www.ams.usda.gov/services/plant-variety-protection',
    memberSince: '1981',
    totalSpecies: 350,
    badge: 'UPOV Member',
  },
};

/**
 * Card with minimal required information.
 */
export const Minimal: Story = {
  args: {
    authorityName: 'Netherlands',
    isoCode: 'NL',
    flagUrl: 'https://flagcdn.com/w80/nl.png',
    department: 'Dutch Board for Plant Varieties',
  },
};

/**
 * Card without a flag showing the fallback placeholder.
 */
export const NoFlag: Story = {
  args: {
    authorityName: 'European Union',
    isoCode: 'QZ',
    flagUrl: null,
    registrar: 'Community Plant Variety Office',
    department: 'CPVO',
    phone: '+33 2 41 25 64 00',
    email: 'cpvo@cpvo.europa.eu',
    website: 'https://cpvo.europa.eu',
    memberSince: '1995',
    totalSpecies: 420,
    badge: 'UPOV Member',
  },
};

/**
 * Card for a major authority with high species count.
 */
export const MajorAuthority: Story = {
  args: {
    authorityName: 'Japan',
    isoCode: 'JP',
    flagUrl: 'https://flagcdn.com/w80/jp.png',
    registrar: 'Ministry of Agriculture, Forestry and Fisheries',
    department: 'Seeds and Seedlings Division',
    phone: '+81-3-3502-5969',
    email: 'syubyo@maff.go.jp',
    website: 'https://www.maff.go.jp/e/policies/intel/pvr.html',
    memberSince: '1982',
    totalSpecies: 580,
    badge: 'UPOV Member',
  },
};

/**
 * Card for a smaller authority with fewer species.
 */
export const SmallerAuthority: Story = {
  args: {
    authorityName: 'Estonia',
    isoCode: 'EE',
    flagUrl: 'https://flagcdn.com/w80/ee.png',
    registrar: 'Plant Production Inspectorate',
    department: 'Variety Department',
    phone: '+372 671 7602',
    email: 'tkis@pktk.ee',
    website: 'https://pktk.ee/en/',
    memberSince: '2000',
    totalSpecies: 85,
    badge: 'UPOV Member',
  },
};

/**
 * Card with very long authority name.
 */
export const LongName: Story = {
  args: {
    authorityName: 'United Kingdom of Great Britain and Northern Ireland',
    isoCode: 'GB',
    flagUrl: 'https://flagcdn.com/w80/gb.png',
    registrar: 'Animal and Plant Health Agency',
    department: 'Plant Variety Rights Office',
    phone: '+44 (0)1223 342350',
    email: 'pvs@apha.gov.uk',
    website: 'https://www.gov.uk/government/organisations/animal-and-plant-health-agency',
    memberSince: '1968',
    totalSpecies: 425,
    badge: 'UPOV Member',
  },
};

/**
 * Card without contact information (minimal display).
 */
export const NoContact: Story = {
  args: {
    authorityName: 'Switzerland',
    isoCode: 'CH',
    flagUrl: 'https://flagcdn.com/w80/ch.png',
    registrar: 'Federal Office for Agriculture',
    totalSpecies: 180,
  },
};

/**
 * Card without badge.
 */
export const NoBadge: Story = {
  args: {
    authorityName: 'Canada',
    isoCode: 'CA',
    flagUrl: 'https://flagcdn.com/w80/ca.png',
    registrar: 'Canadian Food Inspection Agency',
    department: 'Plant Breeders Rights Office',
    phone: '+1 613-773-7241',
    email: 'cfia.pbrinfo-infocdv.acia@inspection.gc.ca',
    website: 'https://inspection.canada.ca/plant-varieties/plants-with-novel-traits',
    totalSpecies: 295,
  },
};

/**
 * Card without website URL.
 */
export const NoWebsite: Story = {
  args: {
    authorityName: 'Poland',
    isoCode: 'PL',
    flagUrl: 'https://flagcdn.com/w80/pl.png',
    registrar: 'Research Centre for Cultivar Testing',
    department: 'COBORU',
    phone: '+48 63 242 75 35',
    email: 'coboru@coboru.pl',
    memberSince: '1989',
    totalSpecies: 320,
    badge: 'UPOV Member',
  },
};

/**
 * Multiple cards in a grid layout.
 */
export const GridLayout: Story = {
  render: () => ({
    template: `
      <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(350px, 1fr)); gap: 16px; padding: 16px;">
        <upov-authority-card
          authorityName="United States of America"
          isoCode="US"
          flagUrl="https://flagcdn.com/w80/us.png"
          registrar="USDA Plant Variety Protection Office"
          department="Plant Variety Protection Office"
          phone="+1 571-272-8400"
          email="pvpo@usda.gov"
          website="https://www.ams.usda.gov/services/plant-variety-protection"
          memberSince="1981"
          [totalSpecies]="350"
          badge="UPOV Member"
        ></upov-authority-card>

        <upov-authority-card
          authorityName="Germany"
          isoCode="DE"
          flagUrl="https://flagcdn.com/w80/de.png"
          registrar="Federal Plant Variety Office"
          department="Bundessortenamt"
          phone="+49 511 9566-0"
          email="bundessortenamt@bundessortenamt.de"
          website="https://www.bundessortenamt.de"
          memberSince="1968"
          [totalSpecies]="460"
          badge="UPOV Member"
        ></upov-authority-card>

        <upov-authority-card
          authorityName="France"
          isoCode="FR"
          flagUrl="https://flagcdn.com/w80/fr.png"
          registrar="GEVES - National Seeds Office"
          department="Plant Variety and Seeds Division"
          phone="+33 2 41 22 86 00"
          email="geves@geves.fr"
          website="https://www.geves.fr"
          memberSince="1968"
          [totalSpecies]="510"
          badge="UPOV Member"
        ></upov-authority-card>

        <upov-authority-card
          authorityName="Netherlands"
          isoCode="NL"
          flagUrl="https://flagcdn.com/w80/nl.png"
          registrar="Naktuinbouw"
          department="Dutch Board for Plant Varieties"
          phone="+31 (0)525 56 95 00"
          email="info@naktuinbouw.nl"
          website="https://www.naktuinbouw.com"
          memberSince="1968"
          [totalSpecies]="385"
          badge="UPOV Member"
        ></upov-authority-card>

        <upov-authority-card
          authorityName="Australia"
          isoCode="AU"
          flagUrl="https://flagcdn.com/w80/au.png"
          registrar="IP Australia"
          department="Plant Breeder's Rights Office"
          phone="+61 2 6283 2999"
          email="pbr@ipaustralia.gov.au"
          website="https://www.ipaustralia.gov.au/plant-breeders-rights"
          memberSince="1989"
          [totalSpecies]="275"
          badge="UPOV Member"
        ></upov-authority-card>

        <upov-authority-card
          authorityName="Spain"
          isoCode="ES"
          flagUrl="https://flagcdn.com/w80/es.png"
          registrar="Spanish Plant Variety Office"
          department="OEVV"
          phone="+34 91 347 65 00"
          email="sgcvmpe@mapa.es"
          website="https://www.mapa.gob.es"
          memberSince="1980"
          [totalSpecies]="340"
          badge="UPOV Member"
        ></upov-authority-card>
      </div>
    `,
  }),
};

/**
 * Card in a narrow container to show responsive behavior.
 */
export const NarrowContainer: Story = {
  render: () => ({
    template: `
      <div style="max-width: 400px; padding: 16px; border: 1px dashed #ccc;">
        <upov-authority-card
          authorityName="New Zealand"
          isoCode="NZ"
          flagUrl="https://flagcdn.com/w80/nz.png"
          registrar="Intellectual Property Office of New Zealand"
          department="Plant Variety Rights Office"
          phone="+64 4 495 0600"
          email="pvr@iponz.govt.nz"
          website="https://www.iponz.govt.nz/about-ip/pvr/"
          memberSince="1981"
          [totalSpecies]="165"
          badge="UPOV Member"
        ></upov-authority-card>
      </div>
    `,
  }),
};

/**
 * Card with broken flag URL to show fallback behavior.
 */
export const BrokenFlag: Story = {
  args: {
    authorityName: 'Test Authority',
    isoCode: 'XX',
    flagUrl: 'broken-url.png',
    registrar: 'Test Registrar Office',
    department: 'Testing Department',
    phone: '+00 000 000 000',
    email: 'test@example.com',
    website: 'https://example.com',
    totalSpecies: 0,
    badge: 'Test',
  },
};

/**
 * Cards showcasing different member years.
 */
export const MembershipTimeline: Story = {
  render: () => ({
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px; padding: 16px;">
        <h3 style="margin: 0;">Founding Members (1968)</h3>
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(350px, 1fr)); gap: 16px;">
          <upov-authority-card
            authorityName="Germany"
            isoCode="DE"
            flagUrl="https://flagcdn.com/w80/de.png"
            registrar="Bundessortenamt"
            memberSince="1968"
            [totalSpecies]="460"
            badge="Founding Member"
          ></upov-authority-card>

          <upov-authority-card
            authorityName="France"
            isoCode="FR"
            flagUrl="https://flagcdn.com/w80/fr.png"
            registrar="GEVES"
            memberSince="1968"
            [totalSpecies]="510"
            badge="Founding Member"
          ></upov-authority-card>
        </div>

        <h3 style="margin: 0;">Recent Members (2000s)</h3>
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(350px, 1fr)); gap: 16px;">
          <upov-authority-card
            authorityName="Morocco"
            isoCode="MA"
            flagUrl="https://flagcdn.com/w80/ma.png"
            registrar="Office National de Sécurité Sanitaire"
            memberSince="2006"
            [totalSpecies]="95"
            badge="UPOV Member"
          ></upov-authority-card>

          <upov-authority-card
            authorityName="Tunisia"
            isoCode="TN"
            flagUrl="https://flagcdn.com/w80/tn.png"
            registrar="Ministry of Agriculture"
            memberSince="2003"
            [totalSpecies]="78"
            badge="UPOV Member"
          ></upov-authority-card>
        </div>
      </div>
    `,
  }),
};

/**
 * Cards with different species counts.
 */
export const SpeciesComparison: Story = {
  render: () => ({
    template: `
      <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(350px, 1fr)); gap: 16px; padding: 16px;">
        <upov-authority-card
          authorityName="Japan"
          isoCode="JP"
          flagUrl="https://flagcdn.com/w80/jp.png"
          registrar="Ministry of Agriculture"
          [totalSpecies]="580"
          badge="Highest Count"
        ></upov-authority-card>

        <upov-authority-card
          authorityName="Germany"
          isoCode="DE"
          flagUrl="https://flagcdn.com/w80/de.png"
          registrar="Bundessortenamt"
          [totalSpecies]="460"
          badge="High Count"
        ></upov-authority-card>

        <upov-authority-card
          authorityName="Denmark"
          isoCode="DK"
          flagUrl="https://flagcdn.com/w80/dk.png"
          registrar="Danish AgriFish Agency"
          [totalSpecies]="145"
          badge="Medium Count"
        ></upov-authority-card>

        <upov-authority-card
          authorityName="Iceland"
          isoCode="IS"
          flagUrl="https://flagcdn.com/w80/is.png"
          registrar="Agricultural Authority"
          [totalSpecies]="42"
          badge="Lower Count"
        ></upov-authority-card>
      </div>
    `,
  }),
};

/**
 * Cards showing different contact information formats.
 */
export const ContactVariations: Story = {
  render: () => ({
    template: `
      <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(350px, 1fr)); gap: 16px; padding: 16px;">
        <upov-authority-card
          authorityName="Complete Contact"
          isoCode="US"
          flagUrl="https://flagcdn.com/w80/us.png"
          registrar="Full Contact Authority"
          department="All Details Department"
          phone="+1 555-123-4567"
          email="contact@example.com"
          website="https://example.com"
          [totalSpecies]="200"
          badge="Complete"
        ></upov-authority-card>

        <upov-authority-card
          authorityName="Phone & Email Only"
          isoCode="CA"
          flagUrl="https://flagcdn.com/w80/ca.png"
          registrar="Basic Contact Authority"
          phone="+1 555-987-6543"
          email="info@example.ca"
          [totalSpecies]="150"
          badge="Basic"
        ></upov-authority-card>

        <upov-authority-card
          authorityName="Website Only"
          isoCode="GB"
          flagUrl="https://flagcdn.com/w80/gb.png"
          registrar="Online Authority"
          website="https://example.gov.uk"
          [totalSpecies]="180"
          badge="Digital"
        ></upov-authority-card>

        <upov-authority-card
          authorityName="Name Only"
          isoCode="IE"
          flagUrl="https://flagcdn.com/w80/ie.png"
          registrar="Minimal Contact Authority"
          [totalSpecies]="95"
          badge="Minimal"
        ></upov-authority-card>
      </div>
    `,
  }),
};
