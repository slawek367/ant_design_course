import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Buttons } from './01_general/Buttons';

const Test = () => {
    return (
        <div>test component</div>
    );
};

const Routing = () => {
    return (
        <Switch>
            <Route
                exact={true}
                path='/auth'
                component={Test}
            />
            <Route
                exact={true}
                path='/01'
                component={Buttons}
            />
            <Route component={Test}/>
        </Switch>
    );
};

export default Routing;
