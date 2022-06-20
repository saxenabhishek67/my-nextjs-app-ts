import AllPosts from '../../components/posts/all-posts';

const DUMMY_POSTS = [
  {
    title: 'Getting started with NextJS',
    date: '2022-06-21',
    excerpt: 'NextJs is the react framework for Production.',
    image: 'getting-started-nextjs.png',
    isFeatured: true,
    slug: 'getting-started-with-nextjs',
  },
  {
    title: 'Getting started with JS',
    date: '2022-06-19',
    excerpt: 'JS is the scripting language.',
    image: 'mastering-js-thumb.png',
    isFeatured: true,
    slug: 'mastering-javascript',
  },
];

const AllPostsPage = () => {
  return <AllPosts posts={DUMMY_POSTS} />;
};

export default AllPostsPage;
