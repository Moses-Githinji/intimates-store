import React from 'react';
import CategoryItemsCarousel from '../components/CategoryItemsCarousel';
import SingleProductCategory from '../components/SingleProductCategory';
import Layout from '../components/Layout';
import ProductList from '../components/ProductList';
import ReviewsCarousel from '../components/ReviewsCarousel';
import SuggestionsBox from '../components/SuggestionsBox';
import BlogsCarousel from '../components/BlogsCarousel';
import SingleProductCarousel from '../components/SingleProductCarousel';
import Newsletter from '../components/Newsletter';

function Home() {
  return (
    <Layout>
      <CategoryItemsCarousel />
      <ProductList />
      <SingleProductCategory />
      <ReviewsCarousel />
      <SuggestionsBox />
      <BlogsCarousel />
      <SingleProductCarousel />
      <Newsletter />
    </Layout>
  );
}

export default Home;
