import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleXmark,
  faSpinner,
  faMagnifyingGlass,
  faPlus,
  faEllipsis,
  faEllipsisVertical,
} from '@fortawesome/free-solid-svg-icons';
import styles from './Header.module.scss';
import images from '~/assets/images/';
// giúp cho việc viết class có dấu - đc
const cx = classNames.bind(styles);

function Header() {
  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <img src={images.logo} alt="Tiktok" />
        <div className={cx('search')}>
          <input placeholder="Search accounts and videos" className={cx('search-input')} spellCheck={false}></input>
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
        <div className={cx('action')}>
          <button className={cx('action-upload')}>
            <FontAwesomeIcon className={cx('plus')} icon={faPlus} />
            Upload
          </button>
          <button className={cx('action-login')}>Login</button>
          <FontAwesomeIcon className={cx('dot')} icon={faEllipsisVertical} />
        </div>
      </div>
    </header>
  );
}

export default Header;
