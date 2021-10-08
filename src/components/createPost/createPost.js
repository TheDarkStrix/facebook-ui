import "./createPost.css";

const CreatePost = () => {
  return (
    <>
      <div className="postContainer">
        <div className="heading">
          <div className="d-flex align-items-center">
            <span className="draw">
              <img src="draw.png" alt="draw_icon" />
            </span>
            <span className="postTitle">Compose Post</span>
          </div>
        </div>
        <div className="userInteraction">
          <div className="profileContainer">
            <div className="profile">
              <img src="/profile.png" alt="profile_icon" />
            </div>
          </div>
          <div className="writePost">
            <textarea placeholder="Write something here ..." />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="gif">
              <span className="gifTag">GIF</span>
              <span className="gifText">GIF</span>
            </div>
          </div>
        </div>
        <div className="footer">
          <div>
            <button className="inputbutton">Post</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreatePost;
