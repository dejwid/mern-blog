import Post from "../Post";
import {useEffect, useState} from "react";

export default function IndexPage() {
  const [posts,setPosts] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch('http://localhost:4000/post').then(response => {
      response.json().then(posts => {
        setPosts(posts);
      }).catch(err => {
        console.log('Error parsing posts:', err);
        setError('Failed to parse posts');
      });
    }).catch(err => {
      console.log('Error fetching posts:', err);
      setError('Failed to fetch posts. Is the backend running?');
    });
  }, []);
  return (
    <>
      {error && <div style={{color: 'red', padding: '20px'}}>{error}</div>}
      {posts.length > 0 && posts.map(post => (
        <Post {...post} key={post._id} />
      ))}
    </>
  );
}
