import React from 'react';
import PostThumbnail from './PostThumbnail.js'
import publicUrl from './utils/publicUrl.js';
import css from './Profile.module.css';
import {
  Link
} from "react-router-dom";
import { useParams } from 'react-router-dom';

function Profile(props) {
  const {store} = props;
  let {userId} = useParams();
  let user = store.users.find(user=>user.id===userId) || store.users.find(user=>user.id===store.currentUserId);
  function findPosts(store){
    if (userId){
      return (store.posts.filter(post=>post.userId===userId)).length
    }
    else{
      return (store.posts.filter(post=>post.userId===store.currentUserId)).length
    }
  }
  function findFollowers(store){
    if (userId){
      return (store.followers.filter(follower=>follower.userId===userId)).length
    }
    else{
      return (store.followers.filter(follower=>follower.userId===store.currentUserId)).length
    }
  }
  function findFollowing(store){
    if (userId){
      return (store.followers.filter(follower=>follower.followerId===userId)).length
    }
    else {
      return (store.followers.filter(follower=>follower.followerId===store.currentUserId)).length
    }
  }
  function handleFollow(){ 
    props.onFollow(userId, store.followers.followerId);
}
  function handleUnfollow(){
    props.onUnfollow(userId, store.followers.followerId);
}
  
return (
  <div className={css.container}>
    <div className={css.header}>
      <img className={css.pfp} src={publicUrl(user.photo)} alt="Pfp"/>
      <div className={css.username}>{user.id}</div>
        <button>
          {store.followers.filter(x=>x.followerId===store.currentUserId) ?
            <div className={css.unfollowBtn} onClick={handleUnfollow}>Unfollow</div> :
            <div className={css.followBtn} onClick={handleFollow}>Follow</div>
          }
        </button>
    </div>
    <p className={css.bio}>
      <b>{user.name}</b>
      <br/>{user.bio}
    </p>
    <div className={css.stats}>
        <div className={css.col}>{findPosts(store)}</div>
        <div className={css.col}>{findFollowers(store)}</div>
        <div className={css.col}>{findFollowing(store)}</div>
    </div>
    <div className={css.statss}>
        <div className={css.col}>posts</div>
        <div className={css.col}>followers</div>
        <div className={css.col}>following</div>
    </div>
    <div className={css.posts}>
      {userId ? store.posts.filter(post=>post.userId===userId).map(post=>
      <Link key={post.id} to={post.id}> 
      <PostThumbnail post={post}/>
    </Link>
    ) :
    store.posts.filter(post=>post.userId===store.currentUserId).map(post=>
      <Link key={post.id} to={post.id}> 
      <PostThumbnail post={post}/>
    </Link>
    )
    }
    </div>
  </div>
)
}
  
  export default Profile;