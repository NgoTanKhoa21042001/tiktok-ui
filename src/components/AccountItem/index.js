import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Image from '../Image';

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx('wrapper')}>
      <Image
        className={cx('avatar')}
        src=""
        alt="Hoa"
        fallback="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/57e4341880c948744268b73ab2aa0be0~c5_100x100.jpeg?x-expires=1654326000&x-signature=bYxqFSnGQkyPSHODgoVyttaKHSE%3D"
      ></Image>
      <div className={cx('info')}>
        <p className={cx('name')}>
          <span>Ngô Tấn Khoa</span>
          <FontAwesomeIcon icon={faCheckCircle} className={cx('check-icon')} />
        </p>
        <span className={cx('username')}>Ngotankhoa</span>
      </div>
    </div>
  );
}

export default AccountItem;
