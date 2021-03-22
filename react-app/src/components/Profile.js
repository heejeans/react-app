import React from 'react';
import PostThumbnail from './PostThumbnail.js'
import publicUrl from './utils/publicUrl.js';
import css from './Profile.module.css';

function Profile(props) {
  const {store} = props;
  let user = store.users.find(user=>user.id===store.currentUserId)
  function findPosts(store){
    let postNumber = store.posts.filter(post=>post.userId===store.currentUserId);
    return (postNumber.length);
  }
  function findFollowers(store){
    let followerNumber = store.followers.filter(follower=>follower.userId===store.currentUserId);
    return (followerNumber.length);
  }
  function findFollowing(store){
    let followingNumber = store.followers.filter(follower=>follower.followerId===store.currentUserId);
    return (followingNumber.length);
  }
  
return (
  <div className={css.container}>
    <div className={css.header}>
      <img className={css.pfp} src={publicUrl(user.photo)} alt="Pfp"/>
      <div className={css.username}>{user.id}</div>
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
      {store.posts.filter(post=>post.userId===store.currentUserId).map(post=>
      <PostThumbnail
      post={post}
      />
    )}
    </div>
  </div>
)
}
  
  export default Profile;