import PropTypes from 'prop-types';
import './GlobalStyles.scss';
import './Reset.module.scss';
import './Variable.module.scss';
function GlobalStyles({ children }) {
  return children;
}
GlobalStyles.propTypes = {
  children: PropTypes.node.isRequired,
};
export default GlobalStyles;
