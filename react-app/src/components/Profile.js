import React, { useContext } from 'react';
import PostThumbnail from './PostThumbnail.js'
import publicUrl from './utils/publicUrl.js';
import css from './Profile.module.css';
import {
  Link
} from "react-router-dom";
import { useParams } from 'react-router-dom';
import { StoreContext } from 'contexts/StoreContext';

function Profile(props) {
  let {
    users, posts, followers, currentUserId, addFollower, removeFollower
  } = useContext(StoreContext);
  const {store} = props;
  let {userId} = useParams();
  userId = userId ? userId : currentUserId;
  const user = users.find(u => u.id === userId);
  const postss = posts.filter(p=> p.userId === userId)
  const followerss = followers.filter(f=> f.userId === userId);
  const following = followers.filter(f=> f.followerId === userId);
  function handleFollow() {
    addFollower(userId, currentUserId);
  }
  function handleUnfollow() {
    removeFollower(userId, currentUserId);
  }
  
return (
  <div className={css.container}>
    <header className={css.header}>
      <div className={css.photo}>
        <img src={publicUrl(user.photo)} alt="Profile"/>
      </div>
      <div className={css.id}>
        <span>{user.id}</span>
        {userId !== currentUserId && (
            <div>
              {followerss.some(f => f.followerId === currentUserId) ? (
                <button className={css.unfollowBtn} onClick={handleUnfollow}>
                  Unfollow
                </button>
              ) : (
                <button className={css.followBtn} onClick={handleFollow}>
                  Follow
                </button>
              )}
            </div>
          )}
      </div>
    </header>
    <p className={css.bio}>
      <b>{user.name}</b>
      <br/>{user.bio}
    </p>
    <ul className={css.activity}>
        <li>
          <span>{postss.length}</span>
          <br />
          posts
        </li>
        <li>
          <span>{followerss.length}</span>
          <br />
          followers
        </li>
        <li>
          <span>{following.length}</span>
          <br />
          following
        </li>
  </ul>
    <div className={css.posts}>
    {postss.map(post => (
          <Link key={post.id} to={`/${post.id}`}>
            <PostThumbnail post={post} />
          </Link>
        ))}
    </div>
  </div>
)
}
  
  export default Profile;