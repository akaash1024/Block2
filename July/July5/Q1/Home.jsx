import { useEffect, useState } from 'react';
import PostCard from '../components/PostCard';

function Home() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    fetch('https://dummyjson.com/posts')
      .then(res => res.json())
      .then(data => setPosts(data.posts));
  }, []);

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div style={{ padding: '20px' }}>
      <input
        type="text"
        placeholder="Search by title..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        style={{ marginBottom: '20px', padding: '5px' }}
      />
      {filteredPosts.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}

export default Home;
