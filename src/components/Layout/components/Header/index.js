import classNames from 'classnames/bind';
import styles from './Header.module.scss';

// giúp cho việc viết class có dấu - đc
const cx = classNames.bind(styles);

function Header() {
  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <h2>ok</h2>
      </div>
    </header>
  );
}

export default Header;
