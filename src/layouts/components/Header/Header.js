import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/';
import 'tippy.js/dist/tippy.css';
import Button from '~/components/Button/';
// import 'tippy.js/dist/tippy.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlus,
  faEllipsisVertical,
  faEarthAsia,
  faUser,
  faGear,
  faCoins,
  faSignOut,
} from '@fortawesome/free-solid-svg-icons';
import config from '~/config';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import images from '~/assets/images/';
import Menu from '~/components/Popper/Menu/';
import { faCircleQuestion, faKeyboard } from '@fortawesome/free-regular-svg-icons';
import { InboxIcon, MessageIcon } from '~/components/Icons/';
import Image from '~/components/Image/';
import Search from '../Search/';
// giúp cho việc viết class có dấu - đc
const cx = classNames.bind(styles);
const MENU_ITEM = [
  {
    icon: <FontAwesomeIcon icon={faEarthAsia}></FontAwesomeIcon>,
    title: 'English',
    children: {
      title: 'Languages',
      data: [
        {
          type: 'Language',
          code: 'en',
          title: 'English',
        },
        {
          type: 'Language',
          code: 'vi',
          title: 'Tiếng Việt',
        },
      ],
    },
  },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion}></FontAwesomeIcon>,
    title: 'Feddback and Help',
    to: '/feedback',
    // ...MENU_ITEM,
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard}></FontAwesomeIcon>,
    title: 'Keyboard shortcuts',
  },
];
function Header() {
  const currentUser = true;

  // Handle Logic
  const handleMenuChange = (menuItem) => {
    console.log(menuItem);
  };

  const userMenu = [
    {
      icon: <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>,
      title: 'View Profile',
      to: '/@khoa',
    },
    {
      icon: <FontAwesomeIcon icon={faCoins}></FontAwesomeIcon>,
      title: 'Get Coins',
      to: '/coin',
    },
    {
      icon: <FontAwesomeIcon icon={faGear}></FontAwesomeIcon>,
      title: 'Settings',
      to: '/settings',
    },
    ...MENU_ITEM,
    {
      icon: <FontAwesomeIcon icon={faSignOut}></FontAwesomeIcon>,
      title: 'Log out',
      to: '/logout',
      separate: true,
    },
  ];
  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <Link to={config.routes.home} className={cx('logo-link')}>
          <img src={images.logo} alt="Tiktok" />
        </Link>
        <Button></Button>
        {/* SEARCH */}
        <Search />
        <div className={cx('actions')}>
          {/* nếu mà user login thì ko hiện action */}
          {/* GIAO DIỆN Ô AVATAR */}
          {currentUser ? (
            <div className={cx('current-user')}>
              <Button upload leftIcon={<FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>}>
                {/* <FontAwesomeIcon icon={faPlus} className={cx('plus')}></FontAwesomeIcon> */}
                <span className={cx('text-upload')}>Upload</span>
              </Button>
              <Tippy content="Message" placement="bottom">
                <button>
                  {/* <FontAwesomeIcon className={cx('action-btn')} icon={faMessage}></FontAwesomeIcon> */}
                  <MessageIcon />
                </button>
              </Tippy>
              <Tippy content="Inbox" placement="bottom">
                <button>
                  {/* <FontAwesomeIcon className={cx('action-btn')} icon={faMessage}></FontAwesomeIcon> */}
                  <InboxIcon />
                  <span className={cx('badge')}>12</span>
                </button>
              </Tippy>
            </div>
          ) : (
            <div className={cx('button-container')}>
              <Button upload leftIcon={<FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>}>
                {/* <FontAwesomeIcon icon={faPlus} className={cx('plus')}></FontAwesomeIcon> */}
                <span className={cx('text-upload')}>Upload</span>
              </Button>
              <Button primary>Log in</Button>
            </div>
          )}
          <Menu items={currentUser ? userMenu : MENU_ITEM} onChange={handleMenuChange}>
            {/* ko hiện avatar thì hiện nút 3 chấm */}
            {currentUser ? (
              <Image
                className={cx('user-avatar')}
                src=""
                alt="Ngo Tan Khoa"
                fallback="https://scontent.fhan2-1.fna.fbcdn.net/v/t39.30808-6/306130874_1698426613866032_5015624662303360929_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=NddDhdiXcIgAX_QEN3p&_nc_oc=AQm7QiYp6XjLDCXNLczIt8mrRL9fts_2hFReBEod6YR2_fHorXQU5-zuV_SKxug_uU4&_nc_ht=scontent.fhan2-1.fna&oh=00_AfC1J9OxaY5f8HEsw9BaG1WqNryiBZIKmdUemmDNjxxNGQ&oe=637CC624"
              ></Image>
            ) : (
              <div>
                <button className={cx('more-btn')}>
                  <FontAwesomeIcon
                    icon={faEllipsisVertical}
                    className={cx('plus-icon')}
                  ></FontAwesomeIcon>
                </button>
              </div>
            )}
          </Menu>
          {/* target="_blank" : mở ra tab mới */}
        </div>
      </div>
    </header>
  );
}

export default Header;
