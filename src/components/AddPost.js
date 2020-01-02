import React, { Component } from "react";
import AddPostCss from "./AddPostCss.module.css";

class AddPost extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className={AddPostCss.content}>
        <button className={AddPostCss.btn}>Add post</button>
      </div>
    );
  }
}

export default AddPost;
