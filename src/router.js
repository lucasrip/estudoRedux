import React from 'react';
import {Switch , Route} from 'react-router-dom';

import Reservas from './pages/Reservas'
import Home from './pages/Home'

export default function Routes()
{
    return(
         <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/reservas" exact component={Reservas}/>
         </Switch>
    )
};