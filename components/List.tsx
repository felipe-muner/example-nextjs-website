import * as React from "react";
// import ListItem from "./ListItem";
import { Student } from "../interfaces";

type Props = {
  items: Student[];
};

const List = ({ items }: Props) => (
  <ul>
    {items.map((item) => (
      <li key={item.id}>{item.id}</li>
    ))}
  </ul>
);

export default List;
