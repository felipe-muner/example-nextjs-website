import { useRouter } from "next/router";

function Slug() {
  const router = useRouter();
  console.log(router);
  const { slug } = router.query;
  return (
    <div>
      <h2>Blog Page getting data from param using next/router</h2>
      My ID: {slug}
    </div>
  );
}

export default Slug;
