import React, { useState } from "react";
import initialStore from "./utils/initialStore";
import "./App.css";
import css from "./App.module.css";
import Header from "./Header.js";
import Home from "./Home.js";
import Explore from "./Explore.js";
import NewPost from "./NewPost.js";
import Activity from "./Activity.js";
import Profile from "./Profile.js";
import Navbar from "./Navbar.js";
import uniqueId from "./utils/uniqueId.js";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  const [store, setStore] = useState(initialStore);
  function addLike(postId) {
    const like = {
      userId: store.currentUserId,
      postId,
      datetime: new Date().toISOString()
    };

    setStore({
      ...store,
      likes: store.likes.concat(like)
    });
  }
  function removeLike(postId) {
    setStore({
      ...store,
      likes: store.likes.filter(
        like => !(like.userId === store.currentUserId && like.postId === postId)
      )
    });
  }

  function addComment(postId, text) {
    const comment = {
      userId: store.currentUserId,
      postId,
      text,
      datetime: new Date().toISOString()
    };
    setStore({
      ...store,
      comments: store.comments.concat(comment)
    });
  }
  function addPost(photo, desc) {
    const post = {
      id: uniqueId("post"),
      userId: store.currentUserId,
      photo,
      desc,
      datetime: new Date().toISOString()
    };
    setStore({
      ...store,
      posts: store.posts.concat(post)
    });
}
function addFollower(userId, followerId){
	const follower = {
    userId,
    followerId,
  };

  setStore({
    ...store,
    followers: store.followers.concat(follower)
  });
}
function removeFollower(userId, followerId){
	setStore({
    ...store,
    followers: store.followers.filter(
      follower => !(follower.userId === userId && follower.followerId === followerId)
    )
  });
}

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className={css.container}>
        <Header />
        <main className={css.content}>
        <Switch>
          <Route path="/profile/:userId?">
            <Profile store={store}
              onFollow={addFollower} 
              onUnfollow={removeFollower}/>
          </Route>
          <Route path="/explore">
            <Explore/>
          </Route>
          <Route path="/activity">
            <Activity/>
          </Route>
          <Route path="/newpost">
            <NewPost
              store={store}
              onPost={addPost}/>
          </Route>
          <Route path="/:postId?"> 
          {/*The question mark (?) is to indicate that the parameter is optional, meaning that the Route will be rendered on both / and /:postId. */}
            <Home store={store}
              onLike={addLike}
              onUnlike={removeLike}
              onComment={addComment}/>
          </Route>
         </Switch>
        </main>
        <Navbar/>
      </div>
    </Router>
  );
}

export default App;