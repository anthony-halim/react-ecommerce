import React, {useContext} from 'react';
import './featured-product.styles.scss';
import {withRouter} from 'react-router-dom';
import {CartContext} from '../../context/cart-context';
import {isInCart} from '../../helpers';

const FeaturedProduct = (props) => {
  const {id, title, imageUrl, price, history, description} = props;
  const product = {title, imageUrl, price, id, description};
  const {addProduct, increase, cartItems} = useContext(CartContext);
  const itemInCart = isInCart(product, cartItems);
  return (
    <div className='featured-product'>
      <div className='featured-image'>
        <img src={imageUrl} alt='product' onClick={() => history.push(`/product/${id}`)}/>
      </div>
      <div className='name-price'>
        <h3>{title}</h3>
        <p>${price}</p>
        {
          !itemInCart &&
                    <button
                      className='button is-black nomad-btn'
                      onClick={() => addProduct(product)}
                    >
                        ADD TO CART
                    </button>
        }
        {
          itemInCart &&
                    <button
                      className='button is-white nomad-btn'
                      id='btn-white-outline'
                      onClick={() => increase(product)}
                    >
                        ADD MORE
                    </button>
        }
      </div>
    </div>
  );
};

export default withRouter(FeaturedProduct);
