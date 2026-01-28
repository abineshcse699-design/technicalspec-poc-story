import { Meta, StoryObj } from '@storybook/angular';
import { Header, NavItem } from '../app/components/header/header';

const meta: Meta<Header> = {
  title: 'Components / Header',
  component: Header,
  parameters: {
    layout: 'fullscreen', // header full width varanum
  },
};

export default meta;

type Story = StoryObj<Header>;


// --------------------------------------------------
// 1️⃣ BASIC HEADER (no dropdown open by default)
// --------------------------------------------------

export const Basic: Story = {
  args: {
    lang: 'en',
    breadcrumbLevel: 'home',
  },
};


// --------------------------------------------------
// 2️⃣ HEADER WITH DROPDOWNS (click to open)
// --------------------------------------------------

const navigationWithDropdown: NavItem[] = [
  {
    label: 'FIND & EXPLORE',
    key: 'findExplore',
    sections: [
      {
        title: 'Databases',
        links: ['UPOV Lex', 'PLUTO Search', 'GENIE'],
      },
      {
        title: 'Information & Guidance',
        links: [
          'Explanatory Notes',
          'Information Documents',
          'Test Guidelines',
        ],
      },
    ],
  },
  {
    label: 'PLANT VARIETY PROTECTION',
    key: 'plantVariety',
    sections: [
      {
        title: 'Learn',
        links: ['FAQs', 'Case Studies', 'Farmers', 'Breeders'],
      },
    ],
  },
  {
    label: 'FILE & MANAGE',
    key: 'fileManage',
    sections: [
      {
        title: 'Services',
        links: ['UPOV PRISMA', 'e-PVP Exchange'],
      },
    ],
  },
  {
    label: 'ABOUT UPOV',
    key: 'aboutUpov',
    sections: [
      {
        title: 'Overview',
        links: ['News', 'Members', 'Meetings & Events'],
      },
    ],
  },
];

export const WithDropdowns: Story = {
  name: 'With Dropdown Menus',
  args: {
    lang: 'en',
    breadcrumbLevel: 'home',
    navigation: navigationWithDropdown,
  },
};


// --------------------------------------------------
// 3️⃣ OPEN DROPDOWN BY DEFAULT (for UI review)
// --------------------------------------------------

export const DropdownOpened: Story = {
  name: 'Dropdown – Open State',
  args: {
    lang: 'en',
    breadcrumbLevel: 'home',
    navigation: navigationWithDropdown,
  },
  render: (args) => ({
    props: {
      ...args,
      activeDropdown: 'findExplore', // 👈 default open
    },
    
  }),

};


