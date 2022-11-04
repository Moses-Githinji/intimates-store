import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function BlogsCarousel() {
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
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <div className="blogs-carousel-title-container">
        <p>our blog</p>
      </div>
      <Carousel
        responsive={responsive}
        swipeable
        showDots={false}
        ssr={true} // means to render carousel on server-side.
        infinite
        autoPlay={5000}
        keyBoardControl
        // customTransition="all .5"
        // transitionDuration={10000}
        containerClass="container"
        minimumTouchDrag={80}
        removeArrowOnDeviceType={['tablet', 'mobile']}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        focusOnSelect
        pauseOnHover
      >
        <div className="overall-blog-container">
          <div className="blog-image-container">
            <img src="/duvet3.jpg" alt="blog-image" />
          </div>
          <div className="blog-title-container">
            <p>awesome blog title</p>
          </div>
          <div className="blog-desc-readmore-cta-container">
            <div className="blog-desc-container">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
                ex, consequatur dicta nesciunt quam unde eum harum totam
                mollitia adipisci quod, iste cupiditate nisi qui quaerat
                provident ratione distinctio cumque.
              </p>
            </div>
            <button type="submit" className="readmore-cta">
              read more
            </button>
          </div>
        </div>
        <div className="overall-blog-container">
          <div className="blog-image-container">
            <img src="/bag1.webp" alt="blog-image" />
          </div>
          <div className="blog-title-container">
            <p>beautiful blog title</p>
          </div>
          <div className="blog-desc-readmore-cta-container">
            <div className="blog-desc-container">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
                ex, consequatur dicta nesciunt quam unde eum harum totam
                mollitia adipisci quod, iste cupiditate nisi qui quaerat
                provident ratione distinctio cumque.
              </p>
            </div>
            <button type="submit" className="readmore-cta">
              read more
            </button>
          </div>
        </div>
        <div className="overall-blog-container">
          <div className="blog-image-container">
            <img src="/brown-leather-bag.jpeg" alt="blog-image" />
          </div>
          <div className="blog-title-container">
            <p>captivating blog title</p>
          </div>
          <div className="blog-desc-readmore-cta-container">
            <div className="blog-desc-container">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
                ex, consequatur dicta nesciunt quam unde eum harum totam
                mollitia adipisci quod, iste cupiditate nisi qui quaerat
                provident ratione distinctio cumque.
              </p>
            </div>
            <button type="submit" className="readmore-cta">
              read more
            </button>
          </div>
        </div>
        <div className="overall-blog-container">
          <div className="blog-image-container">
            <img src="/shopping-bag.webp" alt="blog-image" />
          </div>
          <div className="blog-title-container">
            <p>crazy blog title</p>
          </div>
          <div className="blog-desc-readmore-cta-container">
            <div className="blog-desc-container">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
                ex, consequatur dicta nesciunt quam unde eum harum totam
                mollitia adipisci quod, iste cupiditate nisi qui quaerat
                provident ratione distinctio cumque.
              </p>
            </div>
            <button type="submit" className="readmore-cta">
              read more
            </button>
          </div>
        </div>
      </Carousel>
    </>
  );
}

export default BlogsCarousel;
