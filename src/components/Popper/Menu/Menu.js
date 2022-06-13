import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import Tippy from '@tippyjs/react/headless';
import MenuItem from './MenuItem';
import Header from './Header';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import { useState } from 'react';
const cx = classNames.bind(styles);

const fnFunction = () => {};
function Menu({ children, items = [], hideOnClick = false, onChange = fnFunction }) {
  // render là menu item
  // useState render ra cái list item
  // Tạo lịch sử trang nọ trang kia
  const [history, setHistory] = useState([{ data: items }]);
  // Lấy trang nhất luôn là phần tử cuối mảng
  const current = history[history.length - 1];
  const renderItem = () => {
    return current.data.map((item, index) => {
      // trong tình huống nhg thg ko children thì undefined
      const isParent = !!item.children;
      return (
        <MenuItem
          key={index}
          data={item}
          onClick={() => {
            if (isParent) {
              // push cái mới vào, push cái mảng mới vào như tiếng , tiếng việt
              setHistory((prev) => [...prev, item.children]);
            } else {
              onChange(item);
            }
          }}
        ></MenuItem>
      );
    });
  };
  // back lại về trang đầu menu
  const handleBack = () => {
    setHistory((prev) => prev.slice(0, history.length - 1));
  };

  const renderResult = (attrs) => (
    <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
      <PopperWrapper className={cx('menu-popper')}>
        {history.length > 1 && <Header title={current.title} onBack={handleBack} />}
        <div className={cx('menu-body')}>{renderItem()}</div>
      </PopperWrapper>
    </div>
  );
  // khi di chuột ra thì về lại vị trí ban đầu
  const handleReset = () => {
    setHistory((prev) => prev.slice(0, 1));
  };
  return (
    <Tippy
      // có thể select đc
      interactive
      delay={[0, 600]}
      offset={[12, 8]}
      hideOnClick={hideOnClick}
      placement="bottom-end"
      render={renderResult}
      onHide={handleReset}
    >
      {children}
    </Tippy>
  );
}

Menu.propTypes = {
  children: PropTypes.node.isRequired,
  items: PropTypes.array,
  hideOnClick: PropTypes.bool,
  onChange: PropTypes.func,
};

export default Menu;
