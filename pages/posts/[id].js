function PostID({ id }) {
  return (
    <div>
      <h1>Post page</h1>
      {id}
    </div>
  );
}

PostID.getInitialProps = async ({ query }) => {
  const { id } = query;

  return { id };
};

export default PostID;
