import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Link from '@material-ui/core/Link';

function SingleProductCategory() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="duvet-category-items-container">
      <div className="categories-title-container">
        <p>duvets</p>
      </div>
      <Carousel
        responsive={responsive}
        swipeable
        showDots={false}
        ssr={true} // means to render carousel on server-side.
        infinite
        autoPlay={5000}
        keyBoardControl={true}
        // customTransition="all .5"
        // transitionDuration={10000}
        containerClass="container"
        minimumTouchDrag={80}
        removeArrowOnDeviceType={['tablet', 'mobile']}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        focusOnSelect={true}
        pauseOnHover={true}
      >
        <div className="single-duvet-item-container">
          <div className="duvet-image-container">
            <img src="/duvet1.jpg" alt="product" />
          </div>
          <div className="single-duvet-item-dimensions-container">
            <p>3X6</p>
          </div>
          <span>10%</span>
        </div>
        <div className="single-duvet-item-container">
          <div className="duvet-image-container">
            <img src="/duvet3.jpg" alt="product" />
          </div>
          <div className="single-duvet-item-dimensions-container">
            <p>4X6</p>
          </div>
          <span>10%</span>
        </div>
        <div className="single-duvet-item-container">
          <div className="duvet-image-container">
            <img src="/duvet1.jpg" alt="product" />
          </div>
          <div className="single-duvet-item-dimensions-container">
            <p>5X6</p>
          </div>
          <span>40%</span>
        </div>
        <div className="single-duvet-item-container">
          <div className="duvet-image-container">
            <img src="/duvet3.jpg" alt="product" />
          </div>
          <div className="single-duvet-item-dimensions-container">
            <p>6X6</p>
          </div>
          <span>60%</span>
        </div>
      </Carousel>
    </div>
  );
}

export default SingleProductCategory;
