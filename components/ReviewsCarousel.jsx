import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function ReviewsCarousel() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <div className="reviews-title-container">
        <p>customer reviews</p>
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
        pauseOnHover
      >
        <div className="individual-review-container">
          <div className="reviewer-name-image-container">
            <div className="reviewer-image-container">
              <img src="/reviewer1.jpg" alt="reviewer-image" />
            </div>
            <div className="reviewer-name-container">
              <p>john doe</p>
            </div>
          </div>
          <div className="reviewer-review-desc-container">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Doloribus cum quo, maxime ullam consequuntur repellat? Autem sint
              animi impedit accusamus? Reiciendis qui beatae deserunt error!
            </p>
          </div>
        </div>
        <div className="individual-review-container">
          <div className="reviewer-name-image-container">
            <div className="reviewer-image-container">
              <img src="/reviewer2.jpg" alt="reviewer-image" />
            </div>
            <div className="reviewer-name-container">
              <p>jane doe</p>
            </div>
          </div>
          <div className="reviewer-review-desc-container">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Doloribus cum quo, maxime ullam consequuntur repellat? Autem sint
              animi impedit accusamus? Reiciendis qui beatae deserunt error!
            </p>
          </div>
        </div>
        <div className="individual-review-container">
          <div className="reviewer-name-image-container">
            <div className="reviewer-image-container">
              <img src="/reviewer3.jpg" alt="reviewer-image" />
            </div>
            <div className="reviewer-name-container">
              <p>james doe</p>
            </div>
          </div>
          <div className="reviewer-review-desc-container">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Doloribus cum quo, maxime ullam consequuntur repellat? Autem sint
              animi impedit accusamus? Reiciendis qui beatae deserunt error!
            </p>
          </div>
        </div>
        <div className="individual-review-container">
          <div className="reviewer-name-image-container">
            <div className="reviewer-image-container">
              <img src="/reviewer4.jpg" alt="reviewer-image" />
            </div>
            <div className="reviewer-name-container">
              <p>g.i jane</p>
            </div>
          </div>
          <div className="reviewer-review-desc-container">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Doloribus cum quo, maxime ullam consequuntur repellat? Autem sint
              animi impedit accusamus? Reiciendis qui beatae deserunt error!
            </p>
          </div>
        </div>
        <div className="individual-review-container">
          <div className="reviewer-name-image-container">
            <div className="reviewer-image-container">
              <img src="/reviewer5.jpg" alt="reviewer-image" />
            </div>
            <div className="reviewer-name-container">
              <p>jones doe</p>
            </div>
          </div>
          <div className="reviewer-review-desc-container">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Doloribus cum quo, maxime ullam consequuntur repellat? Autem sint
              animi impedit accusamus? Reiciendis qui beatae deserunt error!
            </p>
          </div>
        </div>
      </Carousel>
    </>
  );
}

export default ReviewsCarousel;
