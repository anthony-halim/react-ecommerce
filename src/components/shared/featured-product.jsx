import React from 'react';
import './featured-product.styles.scss';
import {withRouter} from 'react-router-dom';

const FeaturedProduct = (props) => {
  const {id, title, imageUrl, price, history} = props;

  return (
    <div className='featured-product'>
      <div className='featured-image'>
        <img src={imageUrl} alt='product' onClick={() => history.push(`/product/${id}`)}/>
      </div>
      <div className='name-price'>
        <h3>{title}</h3>
        <p>${price}</p>
        <button className='button is-black nomad-btn'>ADD TO CART</button>
      </div>
    </div>
  );
};

export default withRouter(FeaturedProduct);
