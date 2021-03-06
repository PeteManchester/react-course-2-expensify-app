import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import AddExpensePage from '../components/AddExpensePage';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import EditExpensePage from '../components/EditExpensePage'
import Header from '../components/Header';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header/>
        </div>
        <Switch>
            <Route path="/" component={ExpenseDashboardPage } exact={true}/>
            <Route path="/edit/:id" component={EditExpensePage}/>
            <Route path="/create" component={AddExpensePage}>

            </Route>/>
            <Route path="/help" component={HelpPage}/>
            <Route  component={NotFoundPage}/>
        </Switch>        
    </BrowserRouter>
);

export default AppRouter;