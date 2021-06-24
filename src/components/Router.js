import React from 'react';
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Nav from './Nav';
import Home from './Home';
import Work from './Work';
import WorkDetail from './WorkDetail';

const AppRouter = () => {

    return (
        <Router>
            <Nav />
            <Switch>
                <Route exact path = "/">
                    <Home />
                </Route>
                <Route exact path= "/work">
                    <Work />
                </Route>
                <Route exact path = "/Work/:workId"> 
                    <WorkDetail />
                </Route>
            </Switch>
        </Router>
    );
}

export default AppRouter;