import { Meta, StoryObj } from '@storybook/angular';
import { Header, NavItem } from '../app/components/header/header';

const meta: Meta<Header> = {
  title: 'Components/Header',
  component: Header,
};

export default meta;

type Story = StoryObj<Header>;

// --------------------------------------------------
// 1️⃣ BASIC – only header, no navigation
// --------------------------------------------------
export const Basic: Story = {
  name: 'Basic Header',
  args: {
    navigation: []
  }
};


// --------------------------------------------------
// 2️⃣ WITHOUT DROPDOWN – menu only
// --------------------------------------------------
const navigationWithoutDropdown: NavItem[] = [
  { label: 'HOME', link: '#' },
  { label: 'ABOUT', link: '#' },
  { label: 'CONTACT', link: '#' }
];

export const WithoutDropdown: Story = {
  name: 'Without Dropdown',
  args: {
    navigation: []
  }
};


// --------------------------------------------------
// 3️⃣ WITH DROPDOWN – full navigation
// --------------------------------------------------
const navigationWithDropdown: NavItem[] = [

  {
    label: 'FIND & EXPLORE',
    key: 'findExplore',
    sections: [
      {
        title: 'Databases',
        links: ['UPOV Lex', 'PLUTO Search', 'GENIE']
      },
      {
        title: 'Information & Guidance',
        links: [
          'Explanatory Notes',
          'Information Documents',
          'Test Guidelines'
        ]
      }
    ]
  },


  {
    label: 'PLANT VARIETY PROTECTION',
    key: 'plantVariety',
    sections: [
      {
        title: 'Learn',
        links: ['FAQs', 'Case Studies', 'Farmers', 'Breeders']
      }
    ]

  },

  {
    label: 'FILE & MANAGE',
    key: 'fileManage',
    sections: [
      {
        title: 'Services',
        links: ['UPOV PRISMA', 'e-PVP Exchange']
      }
    ]
  }

];

export const WithDropdown: Story = {
  name: 'With Dropdown',
  args: {
    navigation: navigationWithDropdown
  }
};

