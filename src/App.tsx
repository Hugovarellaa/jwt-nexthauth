import { useState, useEffect } from "react";
import { Body } from "./components/Body";
import { Header } from "./components/Header";
import { ItemProps } from "./types/Item";
import { Category } from "./types/Category";
import { categories } from "./data/categories";
import { items } from "./data/items";
import { getCurrentMonth, filterListByMonth } from "./helpers/dateFilter";

export const App = () => {
  const [list, setList] = useState(items);
  const [filterList, setFilterList] = useState<ItemProps[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());

  useEffect(() => {
    setFilterList(filterListByMonth(list, currentMonth));
  }, [list, currentMonth]);

 
  return (
    <>
      <Header />
      <Body />
    </>
  );
};
