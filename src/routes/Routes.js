import React from 'react';
import {BrowserRouter,Switch, Route } from 'react-router-dom';
import Menu from '../Views/Menu';
import history from '../Views/Shopping_history';

function Routes(){
    return(
        <BrowserRouter>
         <Switch>
            <Route exact path="/" component={Menu}/> 
            <Route exact path="/Menu" component={Menu}/>       {/* Principal page */}
            <Route exact path="/Shopping_history" component={history}/>    {/* //Route to the history */}
        </Switch>
        </BrowserRouter>
    )
}

export default Routes;