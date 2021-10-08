import "./placeholder.css";

const LeftPlaceHolder = ({ reverse }) => {
  return (
    <div className="sticky-top">
      <div
        className={[
          "h-100 d-flex",
          reverse ? "flex-column-reverse" : "flex-column",
        ].join(" ")}
      >
        <div className="withAvatar">
          <div className="avatar"></div>
          <div className="avatarContent"></div>
        </div>

        <div className="withAvatar">
          <div className="avatar"></div>
          <div className="avatarContent"></div>
        </div>

        <div
          className={["contentOnly ht-250", reverse ? "mt" : ""].join(" ")}
        ></div>
      </div>
    </div>
  );
};

export default LeftPlaceHolder;
