import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component.jsx';

function App() {
  return (
   <div>
   <BrowserRouter>
   <div>
   <Header/>
     <Switch> 
        <Route exact path= "/" component={HomePage} />
        <Route path= "/shop" component={ShopPage} />
     </Switch>
     </div>
     </BrowserRouter>
     </div>
  );
};

export default App;
