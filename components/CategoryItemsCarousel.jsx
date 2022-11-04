import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Link from '@material-ui/core/Link';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';

function CategoryItemsCarousel() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  return (
    <Carousel
      responsive={responsive}
      swipeable
      showDots={false}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
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
      <div className="single-product-container">
        <div className="image-container">
          <img src="/bag1.webp" className="item-image" />
        </div>
        <h4 className="single-category-product-name">Product Name</h4>
        <div className="product-description-container">
          <Breadcrumbs separator="›" aria-label="breadcrumb">
            <Link
              color="inherit"
              href="/"
              className="breadcrumb-link"
              onClick={(event) => {
                event.preventDefault();
                alert('Home Page Clicked');
              }}
            >
              Bags
            </Link>
            <Link
              color="inherit"
              href="/"
              className="breadcrumb-link"
              onClick={(event) => {
                event.preventDefault();
                alert('Dashboard Clicked');
              }}
            >
              Cute Bag
            </Link>
          </Breadcrumbs>
        </div>
      </div>
      <div className="single-product-container">
        <div className="image-container">
          <img src="/brown-leather-bag.jpeg" className="item-image" />
        </div>
        <h4 className="single-category-product-name">Product Name</h4>
        <div className="product-description-container">
          <Breadcrumbs separator="›" aria-label="breadcrumb">
            <Link
              color="inherit"
              href="/"
              className="breadcrumb-link"
              onClick={(event) => {
                event.preventDefault();
                alert('Home Page Clicked');
              }}
            >
              Bags
            </Link>
            <Link
              color="inherit"
              href="/"
              className="breadcrumb-link"
              onClick={(event) => {
                event.preventDefault();
                alert('Dashboard Clicked');
              }}
            >
              Cute Bag
            </Link>
          </Breadcrumbs>
        </div>
      </div>
      <div className="single-product-container">
        <div className="image-container">
          <img src="/camping-bag.jpeg" className="item-image" />
        </div>
        <h4 className="single-category-product-name">Product Name</h4>
        <div className="product-description-container">
          <Breadcrumbs separator="›" aria-label="breadcrumb">
            <Link
              color="inherit"
              href="/"
              className="breadcrumb-link"
              onClick={(event) => {
                event.preventDefault();
                alert('Home Page Clicked');
              }}
            >
              Bags
            </Link>
            <Link
              color="inherit"
              href="/"
              className="breadcrumb-link"
              onClick={(event) => {
                event.preventDefault();
                alert('Dashboard Clicked');
              }}
            >
              Cute Bag
            </Link>
          </Breadcrumbs>
        </div>
      </div>
      <div className="single-product-container">
        <div className="image-container">
          <img src="/converse.webp" className="item-image" />
        </div>
        <h4 className="single-category-product-name">Product Name</h4>
        <div className="product-description-container">
          <Breadcrumbs separator="›" aria-label="breadcrumb">
            <Link
              color="inherit"
              href="/"
              className="breadcrumb-link"
              onClick={(event) => {
                event.preventDefault();
                alert('Home Page Clicked');
              }}
            >
              Bags
            </Link>
            <Link
              color="inherit"
              href="/"
              className="breadcrumb-link"
              onClick={(event) => {
                event.preventDefault();
                alert('Dashboard Clicked');
              }}
            >
              Cute Bag
            </Link>
          </Breadcrumbs>
        </div>
      </div>
      <div className="single-product-container">
        <div className="image-container">
          <img src="/islanders.jpeg" className="item-image" />
        </div>
        <h4 className="single-category-product-name">Product Name</h4>
        <div className="product-description-container">
          <Breadcrumbs separator="›" aria-label="breadcrumb">
            <Link
              color="inherit"
              href="/"
              className="breadcrumb-link"
              onClick={(event) => {
                event.preventDefault();
                alert('Home Page Clicked');
              }}
            >
              Bags
            </Link>
            <Link
              color="inherit"
              href="/"
              className="breadcrumb-link"
              onClick={(event) => {
                event.preventDefault();
                alert('Dashboard Clicked');
              }}
            >
              Cute Bag
            </Link>
          </Breadcrumbs>
        </div>
      </div>
    </Carousel>
  );
}

export default CategoryItemsCarousel;
