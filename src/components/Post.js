import React, { Component } from "react";
import Comments from "./Comments";
import PageChanger from "./PageChanger";
import axios from "axios";
import AddPost from "./AddPost";

class Post extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: this.props.userId,
      pageNumber: 2,
      lastPageNumber: 5,
      posts: [
        {
          id: 1,
          postId: 123,
          username: "black",
          uploadTime: "00:01",
          content: "Today is last day of the year.",
          isLiked: true,
          isDisliked: false,
          likeCount: 91,
          dislikeCount: 50,
          commentVisible: false,
          commentId: 1
        },
        {
          id: 2,
          postId: 124,
          username: "end",
          uploadTime: "00:02",
          content: "And we are still coding.",
          isLiked: true,
          isDisliked: false,
          likeCount: 90,
          dislikeCount: 50,
          commentVisible: false,
          commentId: 1
        },
        {
          id: 3,
          postId: 125,
          username: "black",
          uploadTime: "00:03",
          content: "That's sad!",
          isLiked: true,
          isDisliked: false,
          likeCount: 90,
          dislikeCount: 50,
          commentVisible: false,
          commentId: 1
        }
      ]
    };
  }

  showCommentSection = (newCommentVisible, i) => {
    newCommentVisible
      ? (newCommentVisible = false)
      : (newCommentVisible = true);
    let newPosts = this.state.posts;
    newPosts[i].commentVisible = newCommentVisible;
    this.setState({ posts: newPosts });
  };

  /*componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(response => {
        this.setState({ posts: response.data });
      })
      .catch(error => {});
  }*/

  upVoteHandler = (
    newIsLiked,
    newIsDisliked,
    newLikeCount,
    newDislikeCount,
    i
  ) => {
    let newPosts = this.state.posts;
    if (!newIsLiked && !newIsDisliked) {
      newIsLiked = true;
      newLikeCount = newLikeCount + 1;
    } else if (!newIsLiked && newIsDisliked) {
      newIsDisliked = false;
      newIsLiked = true;
      newLikeCount = newLikeCount + 1;
      newDislikeCount = newDislikeCount - 1;
    } else if (newIsLiked) {
      newIsLiked = false;
      newLikeCount = newLikeCount - 1;
    }
    newPosts[i].isLiked = newIsLiked;
    newPosts[i].likeCount = newLikeCount;
    newPosts[i].isDisliked = newIsDisliked;
    newPosts[i].dislikeCount = newDislikeCount;
    this.setState({ posts: newPosts }, () => {
      axios
        .post("link", this.state)
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        });
    });
  };

  downVoteHandler = (
    newIsLiked,
    newIsDisliked,
    newLikeCount,
    newDislikeCount,
    i
  ) => {
    let newPosts = this.state.posts;
    if (!newIsDisliked && !newIsLiked) {
      newIsDisliked = true;
      newDislikeCount = newDislikeCount + 1;
    } else if (!newIsDisliked && newIsLiked) {
      newIsDisliked = true;
      newIsLiked = false;
      newDislikeCount = newDislikeCount + 1;
      newLikeCount = newLikeCount - 1;
    } else if (newIsDisliked) {
      newIsDisliked = false;
      newDislikeCount = newDislikeCount - 1;
    }
    newPosts[i].isLiked = newIsLiked;
    newPosts[i].likeCount = newLikeCount;
    newPosts[i].isDisliked = newIsDisliked;
    newPosts[i].dislikeCount = newDislikeCount;
    this.setState({ posts: newPosts }, () => {
      axios
        .post("link", this.state)
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        });
    });
  };

  render() {
    const { posts } = this.state;
    return (
      <div className="post">
        <AddPost userId={this.userId} />
        {this.state.posts.map((post, index) => {
          return (
            <div key={post.id} className="content">
              <div className="username">An anonymous user&nbsp;says :</div>
              <div className="post-content">
                <p>{post.content}</p>
              </div>
              <p className="uploadTime">Uploaded on {post.uploadTime}</p>
              <div className="menu">
                <button
                  className="upVote postBtn"
                  onClick={() =>
                    this.upVoteHandler(
                      post.isLiked,
                      post.isDisliked,
                      post.likeCount,
                      post.dislikeCount,
                      index
                    )
                  }
                >
                  {post.likeCount} | Up Vote
                </button>
                <button
                  className="downVote postBtn"
                  onClick={() =>
                    this.downVoteHandler(
                      post.isLiked,
                      post.isDisliked,
                      post.likeCount,
                      post.dislikeCount,
                      index
                    )
                  }
                >
                  {post.dislikeCount} | Down Vote
                </button>
                <button
                  className="comments postBtn"
                  onClick={() =>
                    this.showCommentSection(post.commentVisible, index)
                  }
                >
                  Comments
                </button>
              </div>
              <div className="comments">
                {post.commentVisible && (
                  <Comments
                    commentId={post.commentId}
                    userId={this.state.userId}
                    postId={post.postId}
                  />
                )}
              </div>
            </div>
          );
        })}
        <div className="pages">
          <PageChanger
            pageNumber={this.state.pageNumber}
            lastPageNumber={this.state.lastPageNumber}
          />
        </div>
      </div>
    );
  }
}

export default Post;
