import React from 'react';
import styles from './SuggestedAccount.scss';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
const AccountItem = () => {
  return (
    <>
      <div className={cx('account-item')}>
        <img
          className={cx('account-avatar')}
          src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1668952800&x-signature=74x2YRImyohkYLa3zTWjh3FeHx4%3D"
          alt=""
        />
        <div className={cx('item-info')}>
          <p className={cx('nickname')}>
            <strong>theanh28entertainment</strong>
            <FontAwesomeIcon icon={faCheck} className={cx('item-check')} />
          </p>
          <p className={cx('name')}>Theanh28 Entertainment</p>
        </div>
      </div>
      <div className={cx('account-item')}>
        <img
          className={cx('account-avatar')}
          src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/fac92301a36c2275c99f393061ef04ca~c5_100x100.jpeg?x-expires=1668992400&x-signature=Kbu86ya4VydeUdLcBl%2F3qiQRNpc%3D"
          alt=""
        />
        <div className={cx('item-info')}>
          <p className={cx('nickname')}>
            <strong>tiin.vn</strong>
            <FontAwesomeIcon icon={faCheck} className={cx('item-check')} />
          </p>
          <p className={cx('name')}>Tiin.vn</p>
        </div>
      </div>
      <div className={cx('account-item')}>
        <img
          className={cx('account-avatar')}
          src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/be22b8593ea95c8835d47f4b5309ec16~c5_100x100.jpeg?x-expires=1668992400&x-signature=2HEd0wnHR%2FE1WtxIPxGA56chk2M%3D"
          alt=""
        />
        <div className={cx('item-info')}>
          <p className={cx('nickname')}>
            <strong>datvilla94</strong>
            <FontAwesomeIcon icon={faCheck} className={cx('item-check')} />
          </p>
          <p className={cx('name')}>🔥Đạt Villa🔥</p>
        </div>
      </div>
      <div className={cx('account-item')}>
        <img
          className={cx('account-avatar')}
          src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/39911deb09b62b80810dec42c0722bbd~c5_100x100.jpeg?x-expires=1668992400&x-signature=9SUHweGTjdF5wX5FTDw8Ddifiv8%3D"
          alt=""
        />
        <div className={cx('item-info')}>
          <p className={cx('nickname')}>
            <strong>annhien_boiboi</strong>
            <FontAwesomeIcon icon={faCheck} className={cx('item-check')} />
          </p>
          <p className={cx('name')}>AnNhiên ❤️ BốiBối</p>
        </div>
      </div>
      <div className={cx('account-item')}>
        <img
          className={cx('account-avatar')}
          src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/b05198e7b9e259f57f88b7443b9cb580~c5_100x100.jpeg?x-expires=1668992400&x-signature=Oj4ratgn22tU4PNm9rLrqxTMXN0%3D"
          alt=""
        />
        <div className={cx('item-info')}>
          <p className={cx('nickname')}>
            <strong>manhtienkhoi_</strong>
            <FontAwesomeIcon icon={faCheck} className={cx('item-check')} />
          </p>
          <p className={cx('name')}>Mạnh Tiến Khôi 🐯</p>
        </div>
      </div>
    </>
  );
};

export default AccountItem;
