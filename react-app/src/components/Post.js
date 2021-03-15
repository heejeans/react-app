import React from 'react';
import css from './Post.module.css';
import publicUrl from './utils/publicUrl.js';
import timespan from './utils/timespan.js';

function Post(props){
    function renderLike(self){
        if (self === "true"){
            return (<img src={publicUrl('/assets/assets/like.svg')} alt="Like"/>)
        }
        else{
            return(<img src={publicUrl('/assets/assets/unlike.svg')} alt="Unlike"/>)
        }
    }
    return(
        <div className={css.container}>
            <div className={css.user}>
                <img className={css.profile} src={publicUrl(props.user.photo)} alt="Pfp"/>
                <div className={css.username}> <b>{props.user.id}</b></div>  
            </div>
            <div className={css.post}>
                <img className={css.photo} src={publicUrl(props.post.photo)} id={props.post.id} alt="Pfp"/>
                <div className={css.action}>
                    {renderLike(props.likes.self)}
                    <div className={css.comment}>
                        <img src={publicUrl('/assets/assets/comment.svg')} alt="Comment"/> 
                    </div>
                </div>
                <div className={css.likes}> <b>{props.likes.count} likes</b></div>
                <div className={css.caption}> <b>{props.post.userId}</b> {props.post.desc} </div>
            </div>
            <div className={css.commentsection}>
                <div> <b>{props.comments[0].userId}</b> {props.comments[0].text} </div>
                <div> <b>{props.comments[1].userId}</b> {props.comments[1].text} </div>
            </div>
            <div className={css.date}> {timespan(props.post.datetime)} ago</div>
        </div>
    );
}
export default Post;