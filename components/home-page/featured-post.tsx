import { Posts } from '../../types/types';
import PostGrid from '../posts/post-grid';
import classes from './featured-post.module.css';

interface IProps {
  posts: Posts;
}

const FeaturedPost: React.FC<IProps> = ({ posts }) => {
  return (
    <section className={classes.latest}>
      <h2>Featured Posts</h2>
      <PostGrid posts={posts} />
    </section>
  );
};

export default FeaturedPost;
