import React from "react";
import Post from "./Post.js";
import { useParams } from 'react-router-dom';

function Home(props) {
  const { store } = props;
  let {postId} = useParams(); // the variable name has to match the parameter name

  function findUser(post) {
    return store.users.find(user => user.id === post.userId);
  }

  function findComments(post) {
    return store.comments.filter(comment => comment.postId === post.id);
  }

  function findLikes(post) {
    let postLikes = store.likes.filter(like => like.postId === post.id);
    return {
      self: postLikes.some(like => like.userId === store.currentUserId),
      count: postLikes.length
    };
  }

  return(
    <div>
      {postId ? store.posts.filter(x => x.id === postId).map(post => (
          <Post
            key={post.id}
            user={findUser(post, store)}
            post={post}
            comments={findComments(post, store)}
            likes={findLikes(post, store)}
            onLike={props.onLike}
            onUnlike={props.onUnlike}
            onComment={props.onComment} 
          />
    )) :
      store.posts
        .sort((a, b) => new Date(b.datetime) - new Date(a.datetime))
        .map(post => (
          <Post
            key={post.id}
            user={findUser(post, store)}
            post={post}
            comments={findComments(post, store)}
            likes={findLikes(post, store)}
            onLike={props.onLike}
            onUnlike={props.onUnlike}
            onComment={props.onComment} 
          />
    ))}  
    </div>
    );
}

export default Home;