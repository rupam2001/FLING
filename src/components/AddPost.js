import React, { useState, useEffect } from "react";
import AddPostCss from "./AddPostCss.module.css";
import axios from "axios";

function AddPost(props) {
  const [propUserId, updateId] = useState(props.userId);
  const [isClicked, updateClick] = useState(false);
  const [postContent, updatePostContent] = useState("");
  const [post, updatePost] = useState({ userId: "", content: "" });

  const changeClick = () => {
    isClicked ? updateClick(false) : updateClick(true);
  };

  const handleUserTextChange = event => {
    updatePostContent(event.target.value);
  };

  const handlePost = event => {
    updatePost({ ...post, userId: propUserId, content: postContent });
    console.log(event);
  };

  useEffect(() => {
    /*axios
      .post("link", post)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });*/
    console.log(post);
  }, []);

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
