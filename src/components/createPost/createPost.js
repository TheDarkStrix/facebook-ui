import React, { forwardRef, useState } from "react";
import "./createPost.css";
import Popover from "react-bootstrap/Popover";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import GifRendered from "./gifRendered/gifRendered";
import Posts from "../posts/posts";
import { constantPosts } from "../constants/constantPost";

const UpdatingPopover = React.forwardRef(
  ({ popper, children, show: _, ...props }, ref) => {
    return (
      <Popover ref={ref} body {...props}>
        {children}
      </Popover>
    );
  }
);

const CreatePost = () => {
  const [posts, setPosts] = useState(constantPosts);
  const [postText, setPostText] = useState("");
  const [gifStore, setGifStore] = useState(null);
  const [showToolTip, setShowToolTip] = useState(false);

  const resetValues = () => {
    setGifStore(null);
    setPostText("");
  };

  const createNewPost = () => {
    if (postText != "" || gifStore != null) {
      const post = generateNewPost();
      setPosts([post, ...posts]);
      resetValues();
    }
  };

  const handlePostText = (e) => {
    setPostText(e.target.value);
  };

  const generateUUID = () => {
    let u =
      Date.now().toString(16) + Math.random().toString(16) + "0".repeat(16);
    let guid = [
      u.substr(0, 8),
      u.substr(8, 4),
      "4000-8" + u.substr(13, 3),
      u.substr(16, 12),
    ].join("-");
    return guid;
  };

  const liveData = (type) => {
    const d = new Date();
    if (type === "date")
      return `${d.toLocaleString("default", {
        month: "short",
      })} ${d.getDate()}`;
    if (type === "time") return `${d.getHours()}:${d.getMinutes()}`;
  };

  const generateNewPost = () => {
    return {
      username: "DC",
      image: gifStore != null ? gifStore : "",
      description: postText != "" ? postText : "",
      time: liveData("time"),
      date: liveData("date"),
      id: generateUUID(),
    };
  };

  const selectGif = (gif) => {
    setGifStore(gif);
    setShowToolTip(false);
  };

  const removeGif = () => {
    setGifStore(null);
  };

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
            <textarea
              value={postText}
              placeholder="Write something here ..."
              onChange={handlePostText}
            />
          </div>
        </div>
        {gifStore ? (
          <div className="position-relative">
            <div className="close" onClick={() => removeGif()}>
              &#10006;
            </div>
            <img src={gifStore} alt="gif_preview" className="gifPreview" />
          </div>
        ) : (
          ""
        )}
        <div className="row">
          <div className="col-md-6">
            <div className="position-relative">
              <OverlayTrigger
                trigger="click"
                placement="bottom"
                show={showToolTip}
                overlay={
                  <UpdatingPopover id="popover-contained">
                    <GifRendered select={selectGif} />
                  </UpdatingPopover>
                }
              >
                <div
                  className="gif"
                  onClick={() => setShowToolTip((prev) => !prev)}
                >
                  <span className="gifTag">GIF</span>
                  <span className="gifText">GIF</span>
                </div>
              </OverlayTrigger>
            </div>
          </div>
        </div>
        <div className="footer">
          <div>
            <button className="inputbutton" onClick={() => createNewPost()}>
              Post
            </button>
          </div>
        </div>
      </div>

      {/* Posts are here */}

      <Posts data={posts} />
    </>
  );
};

export default CreatePost;
