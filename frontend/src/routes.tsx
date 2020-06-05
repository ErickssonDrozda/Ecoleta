import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import CreatePoint from './pages/CreatePoint';

const Routes =  () => {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Home} ></Route> 
            <Route path="/create-point" component={CreatePoint} ></Route>        
        </BrowserRouter>
    );
}

export default Routes;