import React, { useState } from 'react';
import css from './Post.module.css';
import publicUrl from './utils/publicUrl.js';
import timespan from './utils/timespan.js';
import {
    Link
  } from "react-router-dom";

function Post(props){
    const [comment, setComment] = useState('');
    const [toggleComment, setToggleComment] = useState(false); // hidden initially
    
    function handleLike(){ 
        props.onLike(props.post.id);
    }
    function handleUnlike(){
        props.onUnlike(props.post.id);
    }
    function handleSubmitComment(event){
        props.onComment(props.post.id, comment); // this calls addComment from App.js
        setComment(''); //reset
        setToggleComment(false); //close comment box
        event.preventDefault(); // prevent page refresh
    }
    return(
        <div className={css.container}>
            <div className={css.user}>
                <img className={css.profile} src={publicUrl(props.user.photo)} alt="Pfp"/>
                <Link to={`profile/${props.user.id}`} key={props.user.id}>
                    <div className={css.username}> <b>{props.user.id}</b></div>  
                </Link>
            </div>
            <div className={css.post}>
                <img className={css.photo} src={publicUrl(props.post.photo)} id={props.post.id} alt="Pfp"/>
                <div className={css.action}>
                <button>
	                {props.likes.self?
		                <img onClick={handleUnlike} src={publicUrl('/assets/assets/unlike.svg')} alt='Unlike Action'/> :
		                <img onClick={handleLike} src={publicUrl('/assets/assets/like.svg')} alt='Like Action'/> 
	                }
                </button>
                    <div onClick={e=>setToggleComment(!toggleComment)} className={css.comment}>
                        <img src={publicUrl('/assets/assets/comment.svg')} alt="Comment"/> 
                    </div>
                </div>
                <div className={css.likes}> <b>{props.likes.count} likes</b></div>
                
                <div className={css.caption}> <Link to={`profile/${props.user.id}`} key={props.user.id}><b>{props.post.userId}</b></Link> {props.post.desc} </div>
            </div>
            <div className={css.commentsection}>
                {props.comments.map(comment=>
                    <div> <Link to={`profile/${comment.userId}`} key={comment.userId}><b>{comment.userId}</b> </Link>{comment.text} </div>
                )}
            </div>
            <div className={css.date}> {timespan(props.post.datetime)} ago</div>
            {toggleComment &&
            <form className={css.addComment} onSubmit={handleSubmitComment}>
                <input type="text" placeholder="Add a comment…" value={comment} onChange={e=>
            setComment(e.target.value)}/>
                <button type="submit">Post</button>
            </form>}

            
        </div>
    );
}
export default Post;
