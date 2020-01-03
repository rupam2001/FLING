import React, { useState, useEffect } from "react";
import AddPostCss from "./AddPostCss.module.css";

function AddPost(props) {
  const [isClicked, updateClick] = useState(false);
  const [postContent, updatePostContent] = useState("");

  const changeClick = () => {
    isClicked ? updateClick(false) : updateClick(true);
  };

  const handleUserTextChange = event => {
    updatePostContent(event.target.value);
  };

  const handlePost = event => {
    event.preventDefault();
    prepareStare();
  };

  const prepareStare = () => {};

  const addPost = () => {
    return (
      <form>
        <textarea
          onChange={handleUserTextChange}
          value={postContent}
        ></textarea>
        <button type="submit" onClick={handlePost}>
          Post
        </button>
      </form>
    );
  };

  return (
    <div>
      <div className={AddPostCss.content}>
        <button className={AddPostCss.btn} onClick={changeClick}>
          Add post
        </button>
        {isClicked && addPost()}
      </div>
    </div>
  );
}

export default AddPost;
