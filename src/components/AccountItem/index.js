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
        fallback="https://scontent.fdad3-5.fna.fbcdn.net/v/t39.30808-6/286255292_1775316946185273_1963524908855740318_n.jpg?stp=dst-jpg_p180x540&_nc_cat=1&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=ntRvqTGJQ5YAX-sV346&tn=DjIfKAk8e8uiIcke&_nc_ht=scontent.fdad3-5.fna&oh=00_AT_9ZO2Nb-W0lz0Gg5PUQAVe7lvzZwsYJO1wu5UEKa6D1A&oe=62A18108"
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
