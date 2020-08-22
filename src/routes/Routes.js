import { HelpOutlineTwoTone, HomeTwoTone } from '@material-ui/icons';
import Home from '../components/Home';
import Help from '../components/Help';

const Routes = [
  {
    path: '/',
    sidebarName: 'Home',
    navbarName: 'Home',
    icon: HomeTwoTone,
    component: Home,
  },
  {
    path: '/help',
    sidebarName: 'Help',
    navbarName: 'Help',
    icon: HelpOutlineTwoTone,
    component: Help,
  }
];

export default Routes;
