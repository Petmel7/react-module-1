import PropTypes from "prop-types";
import s from "./title.module.css";

const styleForTitle = {
  color: "green",
  textTransform: "uppercase",
};

const Title = ({ value }) => {
  return (
    <div className={s.titleWrapper}>
      <h2 className={s.title} style={styleForTitle}>
        {value}
      </h2>
    </div>
  );
};

export default Title;
Title.defaultProps = {
  value: "title",
};

Title.propTypes = {
  value: PropTypes.string,
};
