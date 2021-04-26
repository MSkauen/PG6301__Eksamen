import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Link} from "react-router-dom";
import {Route, Switch} from "react-router";

function Application () {
    return <BrowserRouter>
        <Switch>
            <Route path={"/messages"}>
                <h1>List all the books</h1>
            </Route>
            <Route path={"/create"}>
                <h1>Create a new message</h1>
            </Route>
            <Route path={"/edit"}>
                <h1>Edit an existing book</h1>
            </Route>
            <Route exact path={"/"}>
                <h1>Home page</h1>
                <ul>
                    <li><Link to ={"/messages"}>List messages</Link></li>
                    <li><Link to ={"/create"}>Create message</Link></li>
                </ul>
            </Route>
            <Route>
                Page not found
            </Route>
        </Switch>
    </BrowserRouter>;
}
ReactDOM.render(<Application />, document.getElementById("root"));