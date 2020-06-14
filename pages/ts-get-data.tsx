import { InferGetStaticPropsType } from "next";

type Post = {
  body: string;
  id: number;
  title: string;
  userId: number;
};

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/");
  const posts: Post[] = await res.json();

  return {
    props: {
      posts,
    },
  };
};

function TSExample({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  console.log(posts);
  return (
    <div>
      <h1>ola</h1>
      <ul>
        {posts.map((p) => {
          return <li key={p.id}> {p.id}</li>;
        })}
      </ul>
    </div>
  );
}

export default TSExample;
