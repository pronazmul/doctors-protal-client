import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route, Redirect
  } from "react-router-dom"
import HomePage from '../Home/HomePage'

const Main = () => {
    return (
        <Router>
            <Switch>
                <Route exact path='/'>
                    <HomePage></HomePage>
                </Route>
                
                <Route path='*'>
                        <Redirect to="/" />
                      </Route>
            </Switch>            
        </Router>
    );
};

export default Main;