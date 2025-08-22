import Tippy from "@tippyjs/react/headless";
import classNames from "classnames/bind";
import { useState } from "react";

import styles from "./Menu.module.scss";
import MenuItem from "./MenuItem";
import { Wrapper as PopperWrapper } from "@/components/Popper";
import Header from "./Header";

const cx = classNames.bind(styles);

function Menu({ children, items = [], hideOnClick = false, onChange ,...passProps}) {
  const [history, setHistory] = useState([{ data: items }]);

  const currentItems = history[history.length - 1].data;

  const renderItems = currentItems.map((item, index) => {
    const isParent = !!item.children;

    return (
      <MenuItem
        key={index}
        data={item}
        onClick={() => {
          if (isParent) {
            setHistory((prev) => [...prev, item.children]);
          } else {
            onChange(item);
          }
        }}
      />
    );
  });

  return (
    <Tippy
      // visible
      {...passProps}
      interactive
      delay={[0, 500]}
      offset={[12, 8]}
      hideOnClick={hideOnClick}
      placement="bottom-end"
      render={(attrs) => (
        <div className={cx("menu-list")} tabIndex="-1" {...attrs}>
          <PopperWrapper className={cx("menu-popper")}>
            {history.length > 1 && (
              <Header
                title="Language"
                onBack={() => {
                  setHistory((prev) => prev.slice(0, prev.length - 1));
                }}
              />
            )}
            <div className={cx("menu-body")}>{renderItems}</div>
          </PopperWrapper>
        </div>
      )}
      onHide={() => {
        setHistory((prev) => prev.slice(0, 1));
      }}

    >
      {children}
    </Tippy>
  );
}

export default Menu;
