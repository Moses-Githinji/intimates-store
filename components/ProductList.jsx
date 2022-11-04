import React, { useState } from 'react';
import Rating from '@mui/material/Rating';

function ProductList() {
  const [value, setValue] = useState(4);
  return (
    <div className="parent-products-list-container">
      <div className="individual-product-in-list-container">
        <div className="individual-product-in-list-image-container">
          <img src="/bag1.webp" alt="product" />
        </div>
        <div className="individual-product-in-list-name-container">
          <p>My Awesome Product</p>
        </div>
        <div className="individual-product-in-list-ratings-container">
          <div>
            <Rating name="read-only" value={value} readOnly />
          </div>
        </div>
        <div className="individual-product-in-list-reviews-container">
          <p>14 reviews</p>
        </div>
        <div className="individual-product-in-list-price-container">
          <p>3500/-</p>
        </div>
      </div>
      <div className="individual-product-in-list-container">
        <div className="individual-product-in-list-image-container">
          <img src="/cute-bag.jpeg" alt="product" />
        </div>
        <div className="individual-product-in-list-name-container">
          <p>My Awesome Product</p>
        </div>
        <div className="individual-product-in-list-ratings-container">
          <div>
            <Rating name="read-only" value={value} readOnly />
          </div>
        </div>
        <div className="individual-product-in-list-reviews-container">
          <p>14 reviews</p>
        </div>
        <div className="individual-product-in-list-price-container">
          <p>3500/-</p>
        </div>
      </div>
      <div className="individual-product-in-list-container">
        <div className="individual-product-in-list-image-container">
          <img src="/migs.jpeg" alt="product" />
        </div>
        <div className="individual-product-in-list-name-container">
          <p>My Awesome Product</p>
        </div>
        <div className="individual-product-in-list-ratings-container">
          <div>
            <Rating name="read-only" value={value} readOnly />
          </div>
        </div>
        <div className="individual-product-in-list-reviews-container">
          <p>14 reviews</p>
        </div>
        <div className="individual-product-in-list-price-container">
          <p>3500/-</p>
        </div>
      </div>
      <div className="individual-product-in-list-container">
        <div className="individual-product-in-list-image-container">
          <img src="/shopping-bag.webp" alt="product" />
        </div>
        <div className="individual-product-in-list-name-container">
          <p>My Awesome Product</p>
        </div>
        <div className="individual-product-in-list-ratings-container">
          <div>
            <Rating name="read-only" value={value} readOnly />
          </div>
        </div>
        <div className="individual-product-in-list-reviews-container">
          <p>14 reviews</p>
        </div>
        <div className="individual-product-in-list-price-container">
          <p>3500/-</p>
        </div>
      </div>
      <div className="individual-product-in-list-container">
        <div className="individual-product-in-list-image-container">
          <img src="/weird-bag.jpeg" alt="product" />
        </div>
        <div className="individual-product-in-list-name-container">
          <p>My Awesome Product</p>
        </div>
        <div className="individual-product-in-list-ratings-container">
          <div>
            <Rating name="read-only" value={value} readOnly />
          </div>
        </div>
        <div className="individual-product-in-list-reviews-container">
          <p>14 reviews</p>
        </div>
        <div className="individual-product-in-list-price-container">
          <p>3500/-</p>
        </div>
      </div>
      <div className="individual-product-in-list-container">
        <div className="individual-product-in-list-image-container">
          <img src="/nike-sneakers.jpeg" alt="product" />
        </div>
        <div className="individual-product-in-list-name-container">
          <p>My Awesome Product</p>
        </div>
        <div className="individual-product-in-list-ratings-container">
          <div>
            <Rating name="read-only" value={value} readOnly />
          </div>
        </div>
        <div className="individual-product-in-list-reviews-container">
          <p>14 reviews</p>
        </div>
        <div className="individual-product-in-list-price-container">
          <p>3500/-</p>
        </div>
      </div>
      <div className="individual-product-in-list-container">
        <div className="individual-product-in-list-image-container">
          <img src="/islanders.jpeg" alt="product" />
        </div>
        <div className="individual-product-in-list-name-container">
          <p>My Awesome Product</p>
        </div>
        <div className="individual-product-in-list-ratings-container">
          <div>
            <Rating name="read-only" value={value} readOnly />
          </div>
        </div>
        <div className="individual-product-in-list-reviews-container">
          <p>14 reviews</p>
        </div>
        <div className="individual-product-in-list-price-container">
          <p>3500/-</p>
        </div>
      </div>
      <div className="individual-product-in-list-container">
        <div className="individual-product-in-list-image-container">
          <img src="/newbies.webp" alt="product" />
        </div>
        <div className="individual-product-in-list-name-container">
          <p>My Awesome Product</p>
        </div>
        <div className="individual-product-in-list-ratings-container">
          <div>
            <Rating name="read-only" value={value} readOnly />
          </div>
        </div>
        <div className="individual-product-in-list-reviews-container">
          <p>14 reviews</p>
        </div>
        <div className="individual-product-in-list-price-container">
          <p>3500/-</p>
        </div>
      </div>
    </div>
  );
}

export default ProductList;
