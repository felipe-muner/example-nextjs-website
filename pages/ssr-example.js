function Page({ data }) {
  return (
    <div>
      <h2>page called on every request</h2>
      <ul>
        {data.map((todo) => {
          return <li key={todo.id}> {todo.id}</li>;
        })}
      </ul>
    </div>
  );
}

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}

export default Page;
