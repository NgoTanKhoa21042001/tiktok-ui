import React from 'react';
import PropTypes from 'prop-types';

import styles from './SuggestedAccount.scss';
import classNames from 'classnames/bind';
import AccountItem from './AccountItem';

const cx = classNames.bind(styles);
// tái sử dụng thì dùng props
const SuggestedAccounts = ({ label }) => {
  return (
    <div className={cx('wrapper')}>
      <p className={cx('label')}>{label}</p>
      <AccountItem />
      {/* <AccountItem /> */}
      {/* <AccountItem /> */}
      <p className={cx('btn-more')}>See all</p>
    </div>
  );
};

SuggestedAccounts.propTypes = {
  label: PropTypes.string.isRequired,
};

export default SuggestedAccounts;
