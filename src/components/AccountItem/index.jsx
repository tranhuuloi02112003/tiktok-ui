import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss";

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx("wrapper")}>
      <img
        className={cx("avatar")}
        src="https://p9-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/6904d4ef46a11e9a5635fd4c517305cf~tplv-tiktokx-cropcenter:100:100.jpeg?dr=14579&refresh_token=45d1a09e&x-expires=1755360000&x-signature=XOA%2Bk133l56R6lK7LJ61xxFi9Qk%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=my"
        alt="Hoaa"
      />
      <div className={cx("info")}>
        <h4 className={cx("name")}>
          <span>Nguyễn Văn A</span>
          <FontAwesomeIcon className={cx("check-icon")} icon={faCheckCircle} />
        </h4>
        <span className={cx("username")}>nguyenvana</span>
      </div>
    </div>
  );
}

export default AccountItem;
