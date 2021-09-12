import React from 'react';
import './App.scss';
import {Route, Switch} from 'react-router-dom';
import HomePage from './components/home-page';
import NotFound from './components/not-found';
import Shop from './components/pages/shop/shop';
import SingleProduct from './components/single-product/single-product';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/shop' component={Shop}/>
        <Route path='/product/:id' component={SingleProduct}/>
        <Route path='*' component={NotFound}/>
      </Switch>
    </div>
  );
}

export default App;
