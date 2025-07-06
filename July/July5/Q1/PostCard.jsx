import { Link } from 'react-router-dom';

function PostCard({ post }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '15px', marginBottom: '10px' }}>
      <h3>{post.title}</h3>
      <p>{post.body.slice(0, 80)}...</p>
      <Link to={`/post/${post.id}`}>Read More</Link>
    </div>
  );
}

export default PostCard;
