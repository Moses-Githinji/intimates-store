import React from 'react';
import Head from 'next/head';
import AppBar from './AppBar';
import Footer from './Footer';
import TopBanner from './TopBanner';

function Layout({ title, children, description }) {
  return (
    <>
      <Head>
        <title>
          {title
            ? `${title} - Intimates Store`
            : 'Intimates Store - Your One Stop Shop for  all Household Goods'}
        </title>
        {description && <meta name="description" content={description}></meta>}
      </Head>
      <TopBanner />
      <AppBar />
      <div>
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}

export default Layout;
