import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/';
import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';
// import 'tippy.js/dist/tippy.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleXmark,
  faSpinner,
  faMagnifyingGlass,
  faPlus,
  faEllipsisVertical,
  faEarthAsia,
  faUser,
  faGear,
  faCoins,
  faSignOut,
} from '@fortawesome/free-solid-svg-icons';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Header.module.scss';
import images from '~/assets/images/';
import Menu from '~/components/Popper/Menu';
import { faCircleQuestion, faKeyboard } from '@fortawesome/free-regular-svg-icons';
import { MessageIcon } from '~/components/Icons';
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
  const [searchResult, setSearchResult] = useState([]);

  const currentUser = true;
  useEffect(() => {
    setTimeout(() => {
      // ra 3 kết quả tìm kiếm
      setSearchResult([1, 2, 3]);
    }, 0);
    // setTimeout(() => {
    //   debugger;
    // }, 5000);
  }, []);

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
        <img src={images.logo} alt="Tiktok" />
        <div>
          <HeadlessTippy
            // có thể select đc
            interactive
            // visible={searchResult.length > 0}
            render={(attrs) => (
              <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                <PopperWrapper>
                  <h4 className={cx('search-title')}>Account</h4>
                  {/* RENDER LIST */}
                  {Array(6)
                    .fill()
                    .map((item, index) => (
                      <AccountItem key={index} />
                    ))}
                </PopperWrapper>
              </div>
            )}
          >
            <div className={cx('search')}>
              <input
                placeholder="Search accounts and videos"
                className={cx('search-input')}
                spellCheck={false}
              ></input>
              {/* Clear */}
              <button className={cx('clear')}>
                <FontAwesomeIcon icon={faCircleXmark} />
              </button>
              {/* Loading */}

              <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
              {/* Search */}
              <span className={cx('line')}></span>
              <button className={cx('search-btn')}>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>
            </div>
          </HeadlessTippy>
        </div>
        <div className={cx('actions')}>
          {/* nếu mà user login thì ko hiện action */}
          {/* GIAO DIỆN Ô AVATAR */}
          {currentUser ? (
            <div className={cx('current-user')}>
              <Button upload leftIcon={<FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>}>
                {/* <FontAwesomeIcon icon={faPlus} className={cx('plus')}></FontAwesomeIcon> */}
                <span className={cx('text-upload')}>Upload</span>
              </Button>
              <Tippy content="Inbox" placement="bottom" delay={[0, 200]}>
                <button>
                  {/* <FontAwesomeIcon className={cx('action-btn')} icon={faMessage}></FontAwesomeIcon> */}
                  <MessageIcon />
                </button>
              </Tippy>
            </div>
          ) : (
            <div>
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
              <img
                className={cx('user-avatar')}
                src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/98cb5a941c6ae617e9f0ce13a76178bc.jpeg?x-expires=1654160400&x-signature=e%2FOnUd%2Fc7OCR4%2B%2BgEtacvobZwVU%3D"
                alt="Ngo Tan Khoa"
              ></img>
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
