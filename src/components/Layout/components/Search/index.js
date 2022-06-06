import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import AccountItem from '~/components/AccountItem';
import HeadlessTippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import { SearchIcon } from '~/components/Icons';
import styles from './Search.module.scss';
const cx = classNames.bind(styles);
function Search() {
  const [searchResult, setSearchResult] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  // hiện khu vực tìm kiếm
  const [showResult, setShowResult] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      // ra 3 kết quả tìm kiếm
      setSearchResult([1, 2, 3]);
    }, 0);
    // setTimeout(() => {
    //   debugger;
    // }, 5000);
  }, []);
  const inputRef = useRef();

  // logic phần dấu x
  const handleClear = () => {
    setSearchValue('');
    setSearchResult([]);
    inputRef.current.focus();
  };
  const handleHideResults = () => {
    setShowResult(false);
  };
  return (
    <div>
      <HeadlessTippy
        // có thể select đc
        interactive
        // hiển thị gợi ý
        visible={showResult && searchResult.length > 0}
        render={(attrs) => (
          <div className={cx('search-result')} tabIndex="-1" {...attrs}>
            <PopperWrapper>
              <h4 className={cx('search-title')}>Account</h4>
              {/* RENDER LIST */}
              {Array(6)
                .fill()
                .map((item, index) => (
                  <AccountItem key={index} />
                ))}
            </PopperWrapper>
          </div>
        )}
        // AANR KEETS QUAR TÌM KIẾM
        onClickOutside={handleHideResults}
      >
        <div className={cx('search')}>
          <input
            ref={inputRef}
            value={searchValue}
            placeholder="Search accounts and videos"
            className={cx('search-input')}
            spellCheck={false}
            onChange={(e) => setSearchValue(e.target.value)}
            onFocus={() => setShowResult(true)}
          ></input>
          {/* Clear */}
          {!!searchValue && (
            <button className={cx('clear')} onClick={handleClear}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
          )}
          {/* Loading */}
          {/* <FontAwesomeIcon className={cx('loading')} icon={faSpinner} /> */}
          {/* Search */}
          <span className={cx('line')}></span>
          <button className={cx('search-btn')}>
            <SearchIcon />
          </button>
        </div>
      </HeadlessTippy>
    </div>
  );
}

export default Search;
