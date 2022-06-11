import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);
function Button({
  to,
  primary = false,
  outline = false,
  small = false,
  large = false,
  rounded = false,
  upload = false,
  disabled = false,
  href,
  children,
  leftIcon,
  onClick,
  ...passProps
}) {
  const classes = cx('wrapper', {
    primary,
    outline,
    small,
    large,
    upload,
    disabled,
    rounded,
    leftIcon,
  });
  let Comp = 'button';
  const props = {
    onClick,
    ...passProps,
  };
  // nếu disabled thì bỏ onClick
  // remove eventListener when btn disabled
  if (disabled) {
    Object.keys(props).forEach((key) => {
      if (key.startsWith('on') && typeof props[key] === 'function') {
        delete props[key];
      }
    });
  }
  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = 'a';
  }
  return (
    <div>
      <Comp className={classes} {...props}>
        {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
        <span>{children}</span>
      </Comp>
    </div>
  );
}

Button.propTypes = {
  children: PropTypes.node,
};
export default Button;
