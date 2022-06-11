import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Image from '../Image/';

const cx = classNames.bind(styles);

function AccountItem({ data }) {
  return (
    <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
      <Image className={cx('avatar')} src="" alt={data.first_name} fallback={data.avatar}></Image>
      <div className={cx('info')}>
        <p className={cx('name')}>
          <span>{data.full_name}</span>
          {data.tick && <FontAwesomeIcon icon={faCheckCircle} className={cx('check-icon')} />}
        </p>
        <span className={cx('username')}>{data.nickname}</span>
      </div>
    </Link>
  );
}
AccountItem.propTypes = {
  // kiểu data là phải object
  data: PropTypes.object.isRequired,
};
export default AccountItem;
