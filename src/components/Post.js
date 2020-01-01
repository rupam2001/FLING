import React, { Component } from "react";
import Comments from "./Comments";

class Post extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [
        {
          id: 1,
          username: "black",
          uploadTime: "00:01",
          content: "Today is last day of the year.",
          isLiked: true,
          isDisliked: false,
          commentVisible: true,
          commentId: 1
        },
        {
          id: 2,
          username: "end",
          uploadTime: "00:02",
          content: "And we are still coding.",
          isLiked: true,
          isDisliked: false,
          commentVisible: false,
          commentId: 1
        },
        {
          id: 3,
          username: "black",
          uploadTime: "00:03",
          content: "That's sad!",
          isLiked: true,
          isDisliked: false,
          commentVisible: true,
          commentId: 1
        }
      ]
    };
  }

  render() {
    return (
      <div className="post">
        {this.state.posts.map(post => {
          return (
            <div key={post.id} className="content">
              Username :<p>{post.username}</p>
              Content :<p>{post.content}</p>
              <p className="uploadTime">Uploaded on {post.uploadTime}</p>
              <div className="menu">
                <button className="upVote postBtn">Up Vote</button>
                <button className="downVote postBtn">Down Vote</button>
                <button className="comments postBtn">Comments</button>
              </div>
              <div className="comments">
                {post.commentVisible && <Comments commentId={post.commentId} />}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Post;