import Link from "next/link";

function Index({ posts }) {
  return (
    <div>
      <h1>First example</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href="/blog/[slug]" as={`/blog/${post.id}`}>
              <a>{post.title}</a>
            </Link>
          </li>
        ))}
      </ul>
      <h2>Second Example</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            {/* <Link href="/posts/[fil]" as={`/posts/2`}></Link> */}
            <Link
              href="/posts/[id]/[title]"
              as={`/posts/${post.id}/${post.title}`}
            >
              {/* <Link href="/posts/[fil]" as={`/posts/${post.id}`}> */}
              <a>{post.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const posts = [
    { id: 1, title: "first title" },
    { id: 2, title: "second title" },
    { id: 3, title: "third title" },
    { id: 4, title: "forth title" },
  ];

  return {
    props: {
      posts,
    },
  };
}

export default Index;
