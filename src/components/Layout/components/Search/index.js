import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import * as searchServices from '~/apiService/searchServices';
import AccountItem from '~/components/AccountItem';
import HeadlessTippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import { SearchIcon } from '~/components/Icons';
import styles from './Search.module.scss';
import { useDebounce } from '~/hooks';
const cx = classNames.bind(styles);
function Search() {
  // hiện kết quả tìm kiếm
  const [searchResult, setSearchResult] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  // hiện khu vực tìm kiếm
  const [showResult, setShowResult] = useState(true);
  // mặc định là false vì ban đầu ko loading
  const [loading, setLoading] = useState(false);
  // DEBOUNCED, ngăn ko cho APi bắn ra mỗi khi gõ
  const debounced = useDebounce(searchValue, 500);
  const inputRef = useRef();
  useEffect(() => {
    if (!debounced.trim()) {
      // xóa hết kí tự thì ẩn kết quả tìm kiếm
      setSearchResult([]);
      return;
    }
    // Đoạn Api
    const fetchApi = async () => {
      // trc khi gọi Apt loading là true
      setLoading(true);

      const result = await searchServices.search(debounced);
      setSearchResult(result);
      // sau khi gọi Apt loading là false

      setLoading(false);
    };
    fetchApi();
    // setTimeout(() => {
    //   debugger;
    // }, 5000);
  }, [debounced]);

  // logic phần dấu x
  const handleClear = () => {
    setSearchValue('');
    setSearchResult([]);
    inputRef.current.focus();
  };
  const handleHideResults = () => {
    setShowResult(false);
  };
  const handleChange = (e) => {
    // ngăn ko cho kí tự đầu là cách
    if (searchValue.length === 0 && e.target.value.trim() === '') {
      return;
    }
    setSearchValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    // Using a wrapper <div> or <span> tag around the reference element solves this by creating a new parentNode context.
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
              {searchResult.map((result) => (
                <AccountItem key={result.id} data={result} />
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
            onChange={handleChange}
            onFocus={() => setShowResult(true)}
          ></input>
          {/* Clear */}
          {!!searchValue && !loading && (
            <button className={cx('clear')} onClick={handleClear}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
          )}
          {/* Loading */}
          {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
          {/* Search */}
          <span className={cx('line')}></span>
          <button className={cx('search-btn')} onMouseDown={(e) => e.preventDefault()}>
            <SearchIcon />
          </button>
        </div>
      </HeadlessTippy>
    </div>
  );
}

export default Search;
