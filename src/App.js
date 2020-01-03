import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Post from "./components/Post";
import axios from "axios";
import Test from "./components/Test";

function App() {
  const [userId, updateUserId] = useState(0);
  const [isLoggedIn, updateIsLoggedIn] = useState(false);

  useEffect(() => {
    axios
      .get("link")
      .then(response => {
        console.log(response);
        updateUserId(userId);
        updateIsLoggedIn(isLoggedIn);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const updateData = (newUserId, NewIsLoggedIn) => {
    updateUserId(newUserId);
    updateIsLoggedIn(NewIsLoggedIn);
  };

  return (
    <div className="App">
      <Header />
      <Post userId={userId} />
    </div>
  );
}

export default App;
