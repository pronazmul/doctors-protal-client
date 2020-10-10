import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route, Redirect
  } from "react-router-dom"
import AppoinmentPage from '../AppoinmentPage/AppoinmentPage'
import HomePage from '../Home/HomePage'

const Main = () => {
    return (
        <Router>
            <Switch>
                <Route exact path='/'>
                    <HomePage></HomePage>
                </Route>

                <Route exact path='/appoinment'>
                    <AppoinmentPage></AppoinmentPage>
                </Route>
                
                <Route path='*'>
                        <Redirect to="/" />
                      </Route>
            </Switch>            
        </Router>
    );
};

export default Main;