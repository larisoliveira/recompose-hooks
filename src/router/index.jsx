import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Recompose from '../pages/Recompose';
import Hooks from '../pages/Hooks';

export default () => (
    <React.Fragment>
        <Switch>
            <Route path="/recompose" component={Recompose} />
            <Route path="/hooks" component={Hooks} />
        </Switch>
    </React.Fragment>
); 