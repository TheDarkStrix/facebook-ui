import "./posts.css";

const Posts = ({ data }) => {
  return (
    <>
      {data.map((data) => (
        <div className="post" key={data.id}>
          <div className="header">
            <div className="d-flex align-items-center">
              <div className="postAvatar">
                <img src="/profile.png" alt="profile" />
              </div>
              <div className="accountDetails">
                <div className="username">{data.username}</div>
                <div className="time">{`${data.date} at ${data.time}`}</div>
              </div>
            </div>
          </div>
          {data.description ? (
            <div className="postDescription">{data.description}</div>
          ) : (
            ""
          )}
          <div className="postImage">
            <img src={data.image} alt="postImage" />
          </div>
        </div>
      ))}
    </>
  );
};

export default Posts;
