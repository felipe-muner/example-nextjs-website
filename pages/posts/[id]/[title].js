import { useRouter } from "next/router";

function Index() {
  const router = useRouter();
  const { id, title } = router.query;
  return (
    <div>
      <h2>ID and title</h2>
      <div>My id: {id}</div>
      <div>My title: {title}</div>
    </div>
  );
}

export default Index;
