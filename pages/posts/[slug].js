import { useRouter } from 'next/router';
import posts from '../../posts';
import Link from 'next/link';

export default function Post() {
  const router = useRouter();
  const { slug } = router.query;
  const post = posts.find(p => p.slug === slug);

  if (!post) {
    return <div>Post not found.</div>;
  }

  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      <Link href="/">Back</Link>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}
