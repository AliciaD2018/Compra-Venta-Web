import React from 'react';
import {BrowserRouter,Switch, Route } from 'react-router-dom';
import Menu from '../Views/Menu';

function Routes(){
    return(
        <BrowserRouter>
         <Switch>
            <Route exact path="/" component={Menu}/>       {/* Principal page */}
            <Route exact path="/Menu" component={Menu}/>    {/* //Route to the menu */}
        </Switch>
        </BrowserRouter>
    )
}

export default Routes;