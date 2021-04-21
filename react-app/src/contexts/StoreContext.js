import React, {createContext, useState, useEffect} from 'react';
import uniqueId from "components/utils/uniqueId.js";
import initialStore from "components/utils/initialStore.js";
import firebase from 'firebase';
import 'firebase/database';
import 'firebase/auth';
import {
  useHistory
} from "react-router-dom";

const firebaseConfig = {
  apiKey: "AIzaSyAL_Dmx5fTI_Hv1oU0-1uPsAZ9RJJUjDXw",
  authDomain: "webappsm-21bcc.firebaseapp.com",
  projectId: "webappsm-21bcc",
  storageBucket: "webappsm-21bcc.appspot.com",
  messagingSenderId: "795205014869",
  appId: "1:795205014869:web:bf8657e5a317636dbc8bdc"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

// export the context so that other components can import
export const StoreContext = createContext(); 

function StoreContextProvider(props){
  const history = useHistory();
  const [currentUserId, setCurrentUserId] = useState(null); // or 'judy'
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [likes, setLikes] = useState([]);
  const [followers, setFollowers] = useState([]);
  const [comments, setComments] = useState([]);

  function login(email, password){
    auth.signInWithEmailAndPassword(email,password).then((response)=>{
      db.collection('users')
        .where('email','==', response.user.email)
        .get()
        .then(snapshot=>{setCurrentUserId(snapshot.docs[0].data().id);
        setUsers(users);
    });
    }).catch(error=>{
      setCurrentUserId(null);  
    });
    history.push('/'); // import useHistory from 'react-router-dom'
  }

  function signup(email, password, bio, id, name, photo){
    const user = {
      email, id, name, bio, photo
    };
    auth.createUserWithEmailAndPassword(email, password).then(()=>{
      // add a user to the firestore database
      db.collection('users').add(user);
      // add a user to the app state
      setUsers(users.concat(user));
      // set the user as a current user 
      setCurrentUserId(id);
      // route to home
      history.push('/');
    })
  }

  useEffect(()=>{// initialization
    db.collection('users').get().then(snapshot=>{
      const users = snapshot.docs.map(d=>d.data());
      setUsers(users);
    });
    db.collection('posts').get().then(snapshot=>{
      const posts = snapshot.docs.map(d=>d.data());
      setPosts(posts);
    });
    db.collection('likes').get().then(snapshot=>{
      const likes = snapshot.docs.map(d=>d.data());
      setLikes(likes);
    });
    db.collection('followers').get().then(snapshot=>{
      const followers = snapshot.docs.map(d=>d.data());
      setFollowers(followers);
    });
    db.collection('comments').get().then(snapshot=>{
      const comments = snapshot.docs.map(d=>d.data());
      setComments(comments);
    });
  }, []);
    function addLike(postId) {
        const like = {
          userId: currentUserId,
          postId,
          datetime: new Date().toISOString()
        };
    
        setLikes(likes.concat(like));
        db.collection('likes').add(like);
      }
      function removeLike(postId) {
        setLikes(likes.filter(
            like => !(like.userId === currentUserId && like.postId === postId)));
        db.collection('likes')
          .where('userId', '==', currentUserId)
          .where('postId', '==', postId)
          .get()
          .then(snapshot=>snapshot.forEach(doc=>doc.ref.delete()));
      }
    
      function addComment(postId, text) {
        const comment = {
          userId: currentUserId,
          postId,
          text,
          datetime: new Date().toISOString()
        };
        setComments(comments.concat(comment));
        db.collection('comments').add(comment);
      }
      function addPost(photo, desc) {
        const post = {
          id: uniqueId("post"),
          userId: currentUserId,
          photo,
          desc,
          datetime: new Date().toISOString()
        };
        setPosts(posts.concat(post));
        db.collection('posts').add(post);
    }
    function addFollower(userId, followerId){
        const follower = {
        userId,
        followerId,
      };
    
      setFollowers(followers.concat(follower));
      db.collection('followers').add(follower);
    }
    function removeFollower(userId, followerId){
        setFollowers(followers.filter(
          follower => !(follower.userId === userId && follower.followerId === followerId)));
        db.collection('followers')
          .where('userId', '==', userId)
          .where('followerId', '==', followerId)
          .get()
          .then(snapshot=>snapshot.forEach(doc=>doc.ref.delete()));
    }
	return (
		<StoreContext.Provider value = {{login, signup, currentUserId, users, posts, likes, followers, comments, addComment, addLike, removeLike, addPost, addFollower, removeFollower}}>
			{props.children}
		</StoreContext.Provider>
	);
}
export default StoreContextProvider; // export this component as default