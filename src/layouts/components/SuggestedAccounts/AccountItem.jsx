import PropTypes from "prop-types";
import classNames from "classnames/bind";
import Tippy from "@tippyjs/react/headless";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { Wrapper as PopperWrapper } from "@/components/Popper";

import styles from "./SuggestedAccounts.module.scss";
import AccountPreview from "./AccountPreview/AccountPreview";

const cx = classNames.bind(styles);

function AccountItem() {
  const renderPreview = (attrs) => (
    <div tabIndex="-1" {...attrs}>
      <PopperWrapper>
        <AccountPreview />
      </PopperWrapper>
    </div>
  );

  return (
    <div>
      <Tippy
        interactive
        offset={[-20, 0]}
        delay={[800, 0]}
        render={renderPreview}
        placement="bottom"
      >
        <div className={cx("account-item")}>
          <img
            className={cx("avatar")}
            src="data:image/jpeg;base64,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"
            alt="Account"
          />
          <div className={cx("item-info")}>
            <p className={cx("nickname")}>
              <strong>nickname</strong>
              <FontAwesomeIcon
                className={cx("check-icon")}
                icon={faCheckCircle}
              />
            </p>
            <p className={cx("name")}>Account Name</p>
          </div>
        </div>
      </Tippy>
    </div>
  );
}

export default AccountItem;
