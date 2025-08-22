import Button from "@/components/Button";
import PropTypes from 'prop-types';
import classNames from "classnames/bind";
import styles from "./Menu.module.scss";

const cx = classNames.bind(styles);

function MenuItem({ data ,onClick }) {

  const classes= cx("menu-item", {
    separator: data.separator,
  });

  return (
    <Button className={classes} leftIcon={data.icon} to={data.to} onClick={onClick}>
      {data.title}
    </Button>
  );
}

MenuItem.propTypes = {
  data: PropTypes.object.isRequired,
  onClick: PropTypes.func,
};

export default MenuItem;
