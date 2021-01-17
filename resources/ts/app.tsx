import React from "react";
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Posts from "./components/posts/Posts";
import User from "./components/users/User";
import NavBar from "./components/layouts/NavBar";

function App() {
    return (
        <Router>
            <div>
                <NavBar/>
                <Switch>
                    <Route path="/posts" exact component={Posts}/>
                    <Route path="/user" exact component={User} />
                </Switch>
            </div>
        </Router>
    )
}

if (document.getElementById('app')) {
    ReactDOM.render(<App/>, document.getElementById('app'));
}
