import React, { useState } from 'react';
import "./App.css";
import css from "./App.module.css";
import Header from "./Header.js";
import Home from "./Home.js";
import Explore from "./Explore.js";
import NewPost from "./NewPost.js";
import Activity from "./Activity.js";
import Profile from "./Profile.js";
import Navbar from "./Navbar.js";
import StoreContextProvider from "contexts/StoreContext.js";
import Login from "./Login/Login.js";
import Signup from "./Signup/Signup.js";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <StoreContextProvider>
      <div className={css.container}>
        <Header />
        <main className={css.content}>
        <Switch>
          <Route path="/profile/:userId?">
            <Profile/>
          </Route>
          <Route path="/explore">
            <Explore/>
          </Route>
          <Route path="/activity">
            <Activity/>
          </Route>
          <Route path="/newpost">
            <NewPost/>
          </Route>
          <Route path="/:postId?"> 
          {/*The question mark (?) is to indicate that the parameter is optional, meaning that the Route will be rendered on both / and /:postId. */}
            <Home/>
          </Route>
          <Route path="/login">
	          <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
         </Switch>
        </main>
        <Navbar/>
      </div>
      </StoreContextProvider>
    </Router>
  );
}

export default App;