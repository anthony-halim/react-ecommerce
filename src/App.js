import React from 'react';
import './App.scss';
import {Route, Switch} from 'react-router-dom';
import HomePage from './components/home-page';
import Shop from './components/pages/shop/shop';
import CartPage from './components/pages/cart-page/cart-page';
import SingleProduct from './components/single-product/single-product';
import NotFound from './components/not-found';
import Checkout from './components/checkout/checkout';
import Success from './components/checkout/stripe-checkout/success';
import Canceled from './components/checkout/stripe-checkout/canceled';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/shop' component={Shop}/>
        <Route path='/product/:id' component={SingleProduct}/>
        <Route path='/cart' component={CartPage}/>
        <Route path='/checkout' component={Checkout}/>
        <Route path='/success' component={Success}/>
        <Route path='/canceled' component={Canceled}/>
        <Route path='*' component={NotFound}/>
      </Switch>
    </div>
  );
}

export default App;
