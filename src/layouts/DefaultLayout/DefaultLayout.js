import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import Header from '~/layouts/components/Header/';
import Sidebar from '~/layouts/components/Sidebar';

const cx = classNames.bind(styles);
function DefaultLayout({ children }) {
  return (
    <div>
      <div className={cx('wrapper')}>
        <Header />
        <div className={cx('container')}>
          <Sidebar />
          <div className={cx('content')}>
            {/* truyền từ ngoài vaof */}
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
export default DefaultLayout;
