export async function getStaticProps() {
  return {
    props: {
      items: [1, 2, 3, 4],
    },
  };
}

function Index({ items }) {
  console.log(items);
  console.log(process.env);
  console.log(process.env.NEXT_PUBLIC_ANALYTICS_ID);
  return (
    <div>
      <h1>image page1213</h1>
      <div></div>
    </div>
  );
}

export default Index;
