import { useState } from "react";
import { Body } from "./components/Body";
import { Header } from "./components/Header";
import { ItemProps } from "./types/Item";
import { Category } from "./types/Category";
import { categories } from "./data/categories";
import { items } from "./data/items";

export const App = () => {
  const [list, setList] = useState(items)

  return (
    <>
      <Header />
      <Body />
    </>
  );
};
