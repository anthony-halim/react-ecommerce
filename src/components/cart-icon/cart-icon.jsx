import React, {useContext} from 'react';
import {withRouter} from 'react-router-dom';
import shoppingBag from '../../assets/shopping-bag.svg';
import {CartContext} from '../../context/cart-context';
import './cart-icon.styles.scss';

const CartIcon = ({history}) => {
  const {itemCount, cartItems} = useContext(CartContext);
  console.log('CartItems:', cartItems);

  return (
    <div className='cart-container'>
      <img src={shoppingBag} alt='shopping-cart-icon' onClick={() => history.push('/cart')}/>
      {itemCount > 0 ?
                <span className='cart-count'>{itemCount}</span> :
                <></>
      }
    </div>
  );
};

export default withRouter(CartIcon);
