import "./placeholder.css";

const LeftPlaceHolder = () => {
  return (
    <>
      <div className="withAvatar">
        <div className="avatar"></div>
        <div className="avatarContent"></div>
      </div>

      <div className="withAvatar">
        <div className="avatar"></div>
        <div className="avatarContent"></div>
      </div>

      <div className="contentOnly h-25"></div>
    </>
  );
};

export default LeftPlaceHolder;
