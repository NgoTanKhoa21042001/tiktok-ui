/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './AccountPreview.module.css';
import Button from '~/components/Button';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);
const AccountPreview = () => {
  return (
    <div className={cx('wrapper')}>
      <header className={cx('header')}>
        <img
          className={cx('avatar')}
          src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/17264c4d5ca7901913b6372e5653d574~c5_100x100.jpeg?x-expires=1669554000&x-signature=5khWRN%2BOnZrNt4SXqO8XJGrc%2F8g%3D"
          alt=""
        />
        <Button primary>Follow</Button>
      </header>
      <div className={cx('body')}>
        <p className={cx('nickname-body')}>
          <strong>theanh28entertainment</strong>
          <FontAwesomeIcon icon={faCheck} className={cx('item-check')} />
        </p>
        <a href="#" className={cx('name-body')}>
          Theanh28 Entertainment
        </a>
        <p className={cx('analytics')}>
          <strong className={cx('value')}>5.9M</strong>
          <span className={cx('label')}>Followers</span>
          <strong className={cx('value')}>263.4M</strong>
          <span className={cx('label')}>Likes</span>
        </p>
      </div>
    </div>
  );
};

export default AccountPreview;
