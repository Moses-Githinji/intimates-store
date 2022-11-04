import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
// import Rating from '@mui/material/Rating';

function SingleProductCarousel() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 2,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const imgResponsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="single-product-carousel-container">
      <Carousel
        responsive={responsive}
        swipeable
        showDots={false}
        ssr={true} // means to render carousel on server-side.
        infinite
        // autoPlay={5000}
        keyBoardControl={true}
        // customTransition="all .5"
        // transitionDuration={10000}
        containerClass="container"
        minimumTouchDrag={80}
        // removeArrowOnDeviceType={['tablet', 'mobile']}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        focusOnSelect={true}
        pauseOnHover
      >
        <div className="overall-single-product-carousel-container">
          <div className="single-product-images-container">
            <Carousel
              responsive={imgResponsive}
              // showDots={true}
              swipeable={false}
              ssr={true} // means to render carousel on server-side.
              infinite={true}
              autoPlay={5000}
              keyBoardControl={true}
              // customTransition="all .5"
              // transitionDuration={10000}
              containerClass="container"
              minimumTouchDrag={80}
              removeArrowOnDeviceType={['tablet', 'mobile', 'desktop']}
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px"
              focusOnSelect={true}
              pauseOnHover={true}
            >
              {/* Pass an array of images of a single product */}
              <img
                src="/duvet1.jpg"
                alt="product-image"
                className="product-pic"
              />
              <img
                src="/duvet3.jpg"
                alt="product-image"
                className="product-pic"
              />
              <img
                src="/migs.jpeg"
                alt="product-image"
                className="product-pic"
              />
              <img
                src="/newbies.webp"
                alt="product-image"
                className="product-pic"
              />
              <img
                src="/nike-sneakers.jpeg"
                alt="product-image"
                className="product-pic"
              />
              <img
                src="/converse.webp"
                alt="product-image"
                className="product-pic"
              />
            </Carousel>
          </div>
          <div className="title-desc-btn-container">
            <div className="single-product-title-container">
              <p>product title</p>
            </div>
            <div className="single-product-desc-container">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim,
                ex!
              </p>
            </div>
            <button type="submit" className="buy-single-product-cta">
              buy now
            </button>
          </div>
        </div>
        <div className="overall-single-product-carousel-container">
          <div className="single-product-images-container">
            <Carousel
              responsive={imgResponsive}
              // showDots={true}
              swipeable={false}
              ssr={true} // means to render carousel on server-side.
              infinite={true}
              autoPlay={5000}
              keyBoardControl={true}
              // customTransition="all .5"
              // transitionDuration={10000}
              containerClass="container"
              minimumTouchDrag={80}
              removeArrowOnDeviceType={['tablet', 'mobile', 'desktop']}
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px"
              focusOnSelect={true}
              pauseOnHover={true}
            >
              {/* Pass an array of images of a single product */}
              <img
                src="/duvet1.jpg"
                alt="product-image"
                className="product-pic"
              />
              <img
                src="/duvet3.jpg"
                alt="product-image"
                className="product-pic"
              />
              <img
                src="/migs.jpeg"
                alt="product-image"
                className="product-pic"
              />
              <img
                src="/newbies.webp"
                alt="product-image"
                className="product-pic"
              />
              <img
                src="/nike-sneakers.jpeg"
                alt="product-image"
                className="product-pic"
              />
              <img
                src="/converse.webp"
                alt="product-image"
                className="product-pic"
              />
            </Carousel>
          </div>
          <div className="title-desc-btn-container">
            <div className="single-product-title-container">
              <p>product title</p>
            </div>
            <div className="single-product-desc-container">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim,
                ex!
              </p>
            </div>
            <button type="submit" className="buy-single-product-cta">
              buy now
            </button>
          </div>
        </div>
        <div className="overall-single-product-carousel-container">
          <div className="single-product-images-container">
            <Carousel
              responsive={imgResponsive}
              // showDots={true}
              swipeable={false}
              ssr={true} // means to render carousel on server-side.
              infinite={true}
              autoPlay={5000}
              keyBoardControl={true}
              // customTransition="all .5"
              // transitionDuration={10000}
              containerClass="container"
              minimumTouchDrag={80}
              removeArrowOnDeviceType={['tablet', 'mobile', 'desktop']}
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px"
              focusOnSelect={true}
              pauseOnHover={true}
            >
              {/* Pass an array of images of a single product */}
              <img
                src="/duvet1.jpg"
                alt="product-image"
                className="product-pic"
              />
              <img
                src="/duvet3.jpg"
                alt="product-image"
                className="product-pic"
              />
              <img
                src="/migs.jpeg"
                alt="product-image"
                className="product-pic"
              />
              <img
                src="/newbies.webp"
                alt="product-image"
                className="product-pic"
              />
              <img
                src="/nike-sneakers.jpeg"
                alt="product-image"
                className="product-pic"
              />
              <img
                src="/converse.webp"
                alt="product-image"
                className="product-pic"
              />
            </Carousel>
          </div>
          <div className="title-desc-btn-container">
            <div className="single-product-title-container">
              <p>product title</p>
            </div>
            <div className="single-product-desc-container">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim,
                ex!
              </p>
            </div>
            <button type="submit" className="buy-single-product-cta">
              buy now
            </button>
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default SingleProductCarousel;
