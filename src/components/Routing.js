import React from 'react';
import {Route, Switch} from "react-router-dom";

import Delivery from "../containers/Delivery"
import SignIn from '../containers/SignIn';
import SignUp from '../containers/SignUp';
import Navigation from './Navigation';
import Riders from "../containers/Riders";


function Routing() {
  return (
    <Switch>
        <Navigation />
        <Route path="/delivery" component={Delivery} />
        <Route path ="/signup" component={SignUp} />
        <Route path="/signin" component={SignIn} />
        <Route path="/riders" component={Riders} />
    </Switch>
  )
}

export default Routing