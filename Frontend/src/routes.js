import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom'

import Dashboard from './pages/DashBoard/index';
import New from './pages/New/index';
import Login from './pages/Login/index';


export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login}/>
                <Route path="/dashboard" component={Dashboard}/>
                <Route path="/new" component={New}/>
            </Switch>
        </BrowserRouter>   
    )
}