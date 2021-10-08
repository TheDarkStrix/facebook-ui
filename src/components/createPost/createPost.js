import React, { forwardRef } from "react";
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
            <div className="position-relative">
              <OverlayTrigger
                trigger="click"
                placement="bottom"
                overlay={
                  <UpdatingPopover id="popover-contained">
                    <GifRendered />
                  </UpdatingPopover>
                }
              >
                <div className="gif">
                  <span className="gifTag">GIF</span>
                  <span className="gifText">GIF</span>
                </div>
              </OverlayTrigger>
            </div>
          </div>
        </div>
        <div className="footer">
          <div>
            <button className="inputbutton">Post</button>
          </div>
        </div>
      </div>

      {/* Posts are here */}

      <Posts data={constantPosts} />
    </>
  );
};

export default CreatePost;
