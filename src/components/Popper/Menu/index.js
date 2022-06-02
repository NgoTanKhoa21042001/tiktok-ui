import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import Tippy from '@tippyjs/react/headless';
import MenuItem from './MenuItem';
import Header from './Header';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import { useState } from 'react';
const cx = classNames.bind(styles);

const fnFunction = () => {};
function Menu({ children, items = [], onChange = fnFunction }) {
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
  return (
    <Tippy
      // có thể select đc
      // visible
      interactive
      delay={[0, 600]}
      offset={[12, 8]}
      placement="bottom-end"
      render={(attrs) => (
        <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
          <PopperWrapper className={cx('menu-popper')}>
            {history.length > 1 && (
              <Header
                title={'Languages'}
                onBack={() => {
                  setHistory((prev) => prev.slice(0, history.length - 1));
                }}
              />
            )}
            {renderItem()}
          </PopperWrapper>
        </div>
      )}
      // khi di chuột ra thì về lại vị trí ban đầu
      onHide={() => setHistory((prev) => prev.slice(0, 1))}
    >
      {children}
    </Tippy>
  );
}

export default Menu;