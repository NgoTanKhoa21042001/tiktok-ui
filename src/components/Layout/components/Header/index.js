import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
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
} from '@fortawesome/free-solid-svg-icons';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Header.module.scss';
import images from '~/assets/images/';
import Menu from '~/components/Popper/Menu';
import { faCircleQuestion, faKeyboard } from '@fortawesome/free-regular-svg-icons';
// giúp cho việc viết class có dấu - đc
const cx = classNames.bind(styles);
const MENU_ITEM = [
  {
    icon: <FontAwesomeIcon icon={faEarthAsia}></FontAwesomeIcon>,
    title: 'English',
  },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion}></FontAwesomeIcon>,
    title: 'Feddback and Help',
    to: '/feedback',
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard}></FontAwesomeIcon>,
    title: 'Keyboard shortcuts',
  },
];
function Header() {
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      // ra 3 kết quả tìm kiếm
      setSearchResult([1, 2, 3]);
    }, 0);
    // setTimeout(() => {
    //   debugger;
    // }, 5000);
  }, []);
  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <img src={images.logo} alt="Tiktok" />
        <div>
          <Tippy
            // có thể select đc
            interactive
            visible={searchResult.length > 0}
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
          </Tippy>
        </div>
        <div className={cx('actions')}>
          {/* target="_blank" : mở ra tab mới */}
          <Button upload leftIcon={<FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>}>
            {/* <FontAwesomeIcon icon={faPlus} className={cx('plus')}></FontAwesomeIcon> */}
            <span className={cx('text-upload')}>Upload</span>
          </Button>
          <Button primary>Log in</Button>

          <Menu items={MENU_ITEM}>
            <button className={cx('more-btn')}>
              <FontAwesomeIcon icon={faEllipsisVertical}></FontAwesomeIcon>
            </button>
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
