import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import Tippy from '@tippyjs/react/headless';
import MenuItem from './MenuItem';
import { Wrapper as PopperWrapper } from '~/components/Popper';
const cx = classNames.bind(styles);
function Menu({ children, items = [] }) {
  // render là menu item
  const renderItem = () => {
    return items.map((item, index) => <MenuItem key={index} data={item}></MenuItem>);
  };
  return (
    <Tippy
      // có thể select đc
      interactive
      delay={[0, 600]}
      placement="bottom-end"
      render={(attrs) => (
        <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
          <PopperWrapper className={cx('menu-popper')}>{renderItem()}</PopperWrapper>
        </div>
      )}
    >
      {children}
    </Tippy>
  );
}

export default Menu;
