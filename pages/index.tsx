import { NextPage } from 'next';
import { Fragment } from 'react';

import Hero from '../components/home-page/hero';
import FeaturedPost from '../components/home-page/featured-post';

const DUMMY_POSTS = [
  {
    title: 'Getting started with NextJS',
    date: '2022-06-21',
    excerpt: 'NextJs is the react framework for Production.',
    image: 'getting-started-nextjs.png',
    isFeatured: true,
    slug: 'getting-started-with-nextjs',
  },
];

const HomePage: NextPage = () => {
  return (
    <Fragment>
      <Hero />;
      <FeaturedPost posts={DUMMY_POSTS} />
    </Fragment>
  );
};

export default HomePage;
