import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Recompose from '../pages/Recompose';

export default () => (
    <React.Fragment>
        <Switch>
            <Route path="/recompose" component={Recompose} />
        </Switch>
    </React.Fragment>
); 