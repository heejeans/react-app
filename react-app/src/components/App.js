//import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import css from './App.module.css';
import Navbar from './Navbar.js';
import Header from './Header.js';
import Home from './Home.js';
import Explore from './Explore.js';
import NewPost from './NewPost.js';
import Activity from './Activity.js';
import Profile from './Profile.js';
import initialStore from './utils/initialStore';
import uniqueId from './utils/uniqueId';
//npm start, npm run deploy

function App() {

    const [page, setPage] = useState('home');
    const [store, setStore] = useState(initialStore);

  function addLike(postId){
    const like = {
        userId: store.currentUserId, 
        postId, // make sure you understand this shorthand syntax
        datetime: new Date().toISOString()
    };
    
    setStore({
        store:{
          ...store,// spread props. make sure you understand this
          likes: store.likes.concat(like)
        }
    });
  }

  function removeLike(postId){
    // use filter and currentUserId to remove the like from the likes array
    setStore(state=>({
      store:{
        ...store,
        likes: store.likes.filter(like=>!(like.userId===state.store.currentUserId && like.postId===postId))
      }
  }));
  }

  function addComment(postId, text){
    const comment = {
      userId: store.currentUserId, 
      postId,
      text,
      datetime: new Date().toISOString()
    };
    setStore({
      ...store,
        comments:store.comments.concat(comment)
    });
  }

  function addPost(photo, desc){
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
    setPage("home");
  }
  function cancelPost(){
    setPage("home");
  }

  function renderMain(page){
    switch(page){
    case "home": return <Home 
    store={store}
    onLike={addLike} 
    onUnlike={removeLike}
    onComment={addComment}  />
    case "explore": return <Explore/>;
    case "newpost": return <NewPost
    store={store}
    onPost={addPost}
    onPostCancel={cancelPost}
    />;
    case "activity": return <Activity/>;
    case "profile": return <Profile
    store={store}
    />
    default: return <Home store={store} />;
    }
  }
  
  return (
    <div className={css.container}>
      <Header/>
      <main className={css.content}>
        {renderMain(page)} 
      </main>
      <Navbar onNavChange={setPage}/>
    </div>);
  
}

export default App;
