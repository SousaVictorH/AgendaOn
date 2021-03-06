import React from "react";
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Logon from "./pages/Logon";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Add from "./pages/Add";
import Search from "./pages/Search";

export default function Routes(){

    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Logon}/>
                <Route path="/register" component={Register}/>
                <Route exact path="/home" component={Home}/>
                <Route path="/home/add" component={Add}/>
                <Route path="/home/search" component={Search}/>
            </Switch>
        </BrowserRouter>
    );
}