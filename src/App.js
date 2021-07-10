import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./components/Login/login";
import Main from "./components/Main/main";
import Category from "./components/Category/category";
import Profile from "./components/Profile/profile";
import Details from "./components/PostDetails/postDetails";

function App() {
  // declare routes here
  return (
    <div className="App">
      {/* browserRouter */}
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Login</Link>
              </li>
              <li>
                <Link to="/category">Categories</Link>
              </li>
              <li>
                <Link to="/main">Main</Link>
              </li>
              <li>
                <Link to="/details">Pos Details</Link>
              </li>
              <li>
                <Link to="/profile">Edit Post</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route exact path="/">
              <Login />
            </Route>
            <Route exact path="/category">
              <Category />
              </Route>
            <Route exact path="/main">
              <Main />
            </Route>
            <Route exact path="/details">
              <Details />
            </Route>
            <Route exact path="/profile">
              <Profile />
            </Route>
          </Switch>
        </div>
      </Router>
      {/* End browserRouter */}
    </div>
  );
}

function Home() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Link to="/users">Home</Link>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        hello
      </button>
      <h2>{count}</h2>
    </div>
  );
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

export default App;
