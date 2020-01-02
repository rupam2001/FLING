import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Post from "./components/Post";
import AddPost from "./components/AddPost";

function App() {
  return (
    <div className="App">
      <Header />
      <AddPost />
      <Post />
    </div>
  );
}

export default App;
