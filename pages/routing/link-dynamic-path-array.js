import Link from "next/link";
function Index({ posts }) {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <Link href="/blog/[slug]" as={`/blog/${post.id}`}>
            <a>{post.title}</a>
          </Link>
        </li>
      ))}
    </ul>
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
