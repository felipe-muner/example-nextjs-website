import { GetStaticProps } from "next";
import { studentList } from "../utils/studentsData";
import { Student, XPTO } from "../interfaces";
import List from "../components/List";
// import Link from "next/link";

type Props = {
  items: Student[];
  itemsXPTO: XPTO[];
};

const TypescriptInterface = ({ items, itemsXPTO }: Props) => {
  console.log(items);
  console.log(itemsXPTO);
  return (
    <div>
      <h1>Hello Next.js 👋</h1>
      <List items={items}></List>
      {/* <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p> */}
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  // Example for including static props in a Next.js function component page.
  // Don't forget to include the respective types for any props passed into
  // the component.
  const items: Student[] = studentList;
  const itemsXPTO: XPTO[] = [
    {
      id: 101,
      name: "Felipe Cunha Muner",
      motherId: 82,
      fatherId: 90,
    },
    {
      id: 102,
      name: "Felipe Muner 102",
      motherId: 29,
      fatherId: 30,
    },
  ];
  return { props: { items, itemsXPTO } };
};

export default TypescriptInterface;
