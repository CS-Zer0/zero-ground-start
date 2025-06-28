import Link from 'next/link';
import posts from '../posts';

export default function Home() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      <h1>My Blog</h1>
      <ul>
        {posts.map(post => (
          <li key={post.slug}>
            <Link href={`/posts/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
