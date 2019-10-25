import React from 'react';
//Aqui é onde será feito minhas rotas do frontend
import { BrowserRouter, Switch, Route } from 'react-router-dom';


//importando minhas páginas de rota
import Login from './pages/Login';
import Dashboard from './pages/Dashboard'; 
import New from './pages/New';

//exportando um novo component
export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login}/>
                <Route path="/dashboard" component={Dashboard}/>
                <Route path="/new" component={New}/>
            </Switch>
        </BrowserRouter>
    );
}