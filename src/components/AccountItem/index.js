import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx('wrapper')}>
      <img
        className={cx('avatar')}
        src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/b22305afa82a6e53438a2d27e511bb06~c5_300x300.webp?x-expires=1653872400&x-signature=hL%2Br3cw%2B3VajN5%2FJEEJN2ntTdno%3D"
        alt="Hoa"
      ></img>
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
