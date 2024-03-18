// icons
import {
  QuestionOutlined,
  DashboardOutlined,
  ChromeOutlined,
  LoginOutlined,
  ProfileOutlined,
  FontSizeOutlined,
  BgColorsOutlined,
  BarcodeOutlined,
  CrownOutlined,
  DatabaseOutlined
} from '@ant-design/icons-vue';

export interface menu {
  header?: string;
  title?: string;
  icon?: object;
  to?: string;
  divider?: boolean;
  chip?: string;
  chipColor?: string;
  chipVariant?: string;
  chipIcon?: string;
  children?: menu[];
  disabled?: boolean;
  type?: string;
  subCaption?: string;
}

const sidebarItem: menu[] = [
  { header: '군자 표고버섯 농장' },
  {
    title: '표고 농장 대시보드',
    icon: DashboardOutlined,
    to: '/dashboard'
  },
  {
    title: '표고 농장 생산 관리',
    icon: DatabaseOutlined,
    to: '/managed'
  },
  // { header: 'Authentication' },
  // {
  //   title: 'Login',
  //   icon: LoginOutlined,
  //   to: '/auth/login'
  // },
  // {
  //   title: 'Register',
  //   icon: ProfileOutlined,
  //   to: '/auth/register'
  // },
  { header: 'Utilities' },
  {
    title: 'Typography',
    icon: FontSizeOutlined,
    to: '/typography'
  },
  {
    title: 'Color',
    icon: BgColorsOutlined,
    to: '/colors'
  },
  {
    title: 'Shadow',
    icon: BarcodeOutlined,
    to: '/shadow'
  },
  {
    title: 'Ant Icons',
    icon: CrownOutlined,
    to: '/icon/ant'
  },
  { header: 'Support' },
  {
    title: 'Sample Page',
    icon: ChromeOutlined,
    to: '/sample-page'
  },
  // {
  //   title: 'Documentation',
  //   icon: QuestionOutlined,
  //   to: 'https://codedthemes.gitbook.io/mantis-vuetify/',
  //   type: 'external',
  //   chip: 'gitbook',
  //   chipColor: 'secondary',
  //   chipVariant: 'flat'
  // }
];

export default sidebarItem;
