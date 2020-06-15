// import dynamic from "next/dynamic";
// const Button = dynamic(() => import("../components/Button"));

import Button from "../components/Button";

function HomePage() {
  return (
    <div>
      <h1>Welcome to Next.js!</h1>
      <Button />
    </div>
  );
}

export default HomePage;
