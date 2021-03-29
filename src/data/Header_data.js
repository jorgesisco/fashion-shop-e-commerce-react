import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import PersonOutlinedIcon from '@material-ui/icons/PersonOutlined';
import MenuOutlinedIcon from '@material-ui/icons/MenuOutlined';
import CloseIcon from '@material-ui/icons/Close';

export const HeaderData_2 = [
  {
    text: <SearchIcon />,

    link: '/search',
  },
  {
    text: 'Products',
    link: '/products',
  },
  {
    text: <PersonOutlinedIcon />,
    link: '',
  },
  {
    text: <ShoppingCartOutlinedIcon />,
    link: '/cart',
  },
];

export const BurgerIcon = [
  {
    burger: <MenuOutlinedIcon />,
    burger_open: <CloseIcon />,
  },
];
