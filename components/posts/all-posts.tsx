import PostsGrid from './post-grid';

import classes from './all-posts.module.css';
import { Posts } from '../../types/types';

interface IProps {
  posts: Posts;
}

const AllPosts: React.FC<IProps> = ({ posts }) => {
  return (
    <section className={classes.posts}>
      <h1>All Posts</h1>
      <PostsGrid posts={posts} />
    </section>
  );
};

export default AllPosts;
