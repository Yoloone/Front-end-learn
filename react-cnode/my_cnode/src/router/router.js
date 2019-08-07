import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Index from "../view/index/index.js";
import Course from "../view/course/index.js";
import About from "../view/about/index.js";
import Details from "../view/details/index.js";
import User from "../view/user/index.js";

class IndexRouter extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/index" render={() => (
                    <Redirect to="/index/all" />
                )} />
                <Route path="/index/:id" component={Index} />
                <Route path="/about" component={About} />
                <Route path="/course" component={Course} />
                <Route path="/details/:id" component={Details} />
                <Route path="/user/:id" component={User} />
            </Switch>
        );
    }
}

export default IndexRouter;