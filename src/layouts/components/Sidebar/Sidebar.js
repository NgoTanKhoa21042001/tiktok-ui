import classNames from 'classnames/bind';
import config from '~/config';
import styles from './Sidebar.module.scss';
// MenuItem import Lẻ
import Menu, { MenuItem } from './Menu';
import { HomeIcon, UserGroupIcon, LiveIcon } from '~/components/Icons';
import SuggestedAccount from '~/components/SuggestedAccount';

const cx = classNames.bind(styles);
function Sidebar() {
  return (
    <aside className={cx('wrapper')}>
      <Menu>
        <MenuItem title="For Your" to={config.routes.home} icon={<HomeIcon />} />
        <MenuItem title="Following" to={config.routes.following} icon={<UserGroupIcon />} />
        <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon />} />
      </Menu>
      <SuggestedAccount label="Suggested accounts" />
      {/* <SuggestedAccount label="Following accounts" /> */}
    </aside>
  );
}

export default Sidebar;
