import React, {Component} from "react";
import {BrowserRouter, Switch, Route, HashRouter} from "react-router-dom";

import Main from "../pages/Main";
import Blog from "../pages/Blog";
import Api from "../pages/Api";
// Biography
import Biography from "../pages/Api/Biography";
import BiographyEdit from "../pages/Api/Biography/edit";

class Router extends Component {
    render() {
        return (
            <HashRouter basename="/">
                <Route exact path="#" component={Main}/>
                <Route exact path="/" component={Main}/>
                <Route exact path="/blog/:id" component={Blog}/>
                {/* API */}
                <Route exact path="/api" component={Api}/>
                {/* Biography pages */}
                <Route exact path="/api/biography" component={Biography}/>
                {/*<Route exact path="/api/biography/create" component={BiographyCreate}/>*/}
                <Route exact path="/api/biography/:id" component={BiographyEdit}/>
                {/* */}
                <Route exact path="/api" component={Api}/>
                <Route exact path="/api" component={Api}/>
                <Route exact path="/api" component={Api}/>
                {/* */}
            </HashRouter>
        );
    }
}

export default Router;
