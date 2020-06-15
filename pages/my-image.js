function MyImage() {
  return (
    <div>
      <h1>image page</h1>
      <div>
        <img style={{ width: "100%" }} src="/vercel.svg" alt="my image" />
        <img
          style={{ width: "100%", marginTop: "30px" }}
          src="/myimage.jpg"
          alt="my image"
          title="mamama"
        />
      </div>
    </div>
  );
}

export default MyImage;
