import { Post, Posts } from '../../types/types';

import classes from './post-grid.module.css';
import PostItem from './post-item';

interface IProps {
  posts: Posts;
}

const PostGrid: React.FC<IProps> = ({ posts }) => {
  return (
    <ul className={classes.grid}>
      {posts.map((post: Post) => {
        return <PostItem key={post.slug} post={post} />;
      })}
    </ul>
  );
};

export default PostGrid;
