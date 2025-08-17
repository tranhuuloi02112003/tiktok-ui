import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useRef, useEffect } from "react";
import HeadlessTippy from "@tippyjs/react/headless";

import { Wrapper as PopperWrapper } from "@/components/Popper";
import AccountItem from "@/components/AccountItem";
import styles from "./Search.module.scss";
import * as searchService from "@/apiServices/SearchServices";
import {
  faCircleXmark,
  faSpinner,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { useDebounce } from "@/hooks";

const cx = classNames.bind(styles);

function Search() {
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [showResult, setShowResult] = useState(true);
  const [loading, setLoading] = useState(false);

  const debounced = useDebounce({ value: searchValue, delay: 500 });

  const inputRef = useRef();

  const handleClear = () => {
    setSearchValue("");
    inputRef.current.focus();
    setSearchResult("");
  };

  const handleHideResult = () => {
    setShowResult(false);
  };

  useEffect(() => {
    if (!debounced.trim()) {
      setSearchResult([]);
      return;
    }

    const fetchApi = async () => {
      setLoading(true);

      const result = await searchService.search(debounced);
      
      setSearchResult(result);
      setLoading(false);
    };

    fetchApi();
  }, [debounced]);

  return (
    <HeadlessTippy
      appendTo="parent"
      visible={showResult && searchResult.length > 0}
      interactive
      render={(attrs) => (
        <div className={cx("search-result")} tabIndex="-1" {...attrs}>
          <PopperWrapper>
            <h4 className={cx("search-title")}>Accounts</h4>
            {searchResult.map((result) => (
              <AccountItem key={result.id} data={result} />
            ))}
          </PopperWrapper>
        </div>
      )}
      onClickOutside={handleHideResult}
    >
      <div className={cx("search")}>
        <input
          ref={inputRef}
          type="text"
          placeholder="Search accounts and videos"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          onFocus={() => setShowResult(true)}
        />
        {!!searchValue && !loading && (
          <button className={cx("clear")} onClick={handleClear}>
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
        )}
        {/* Loading */}
        {loading && (
          <FontAwesomeIcon className={cx("loading")} icon={faSpinner} />
        )}
        <button className={cx("search-btn")}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>
    </HeadlessTippy>
  );
}

export default Search;
