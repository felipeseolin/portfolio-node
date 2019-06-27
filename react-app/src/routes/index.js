import React, { Component } from "react";
import { BrowserRouter, Switch, Route, HashRouter } from "react-router-dom";

import Main from "../pages/Main";
import Blog from "../pages/Blog";

class Router extends Component{
    render() {
        return (
            <HashRouter basename="/">
                    <Route exact path="#" component={Main} />
                    <Route exact path="/" component={Main} />
                    <Route exact path="/blog/:id" component={Blog} />

            </HashRouter>
        );
    }
}

export default Router;
