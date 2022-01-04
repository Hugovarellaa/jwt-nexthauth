import * as C from "./styles/App.styles";
import { Item } from "./types/item";
import { categories } from "./data/categories";
import { items } from "./data/items";
import { useEffect, useState } from "react";
import { getCurrentMonth, filterListByMonth } from "./helpers/dateFilter";
import { TableArea } from "./components/TableArea";
import { InforArea } from "./components/InforArea";
import { InputArea } from "./components/InputArea";

export const App = () => {
  const [list, setList] = useState(items);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  const [filterList, setFilterList] = useState<Item[]>([]);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  useEffect(() => {
    setFilterList(filterListByMonth(list, currentMonth));
  }, [list, currentMonth]);

  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth);
  };

  useEffect(() => {
    let incomeCount = 0;
    let expenseCount = 0;

    for (let i in filterList) {
      if (categories[filterList[i].category].expense) {
        expenseCount += filterList[i].value;
      } else {
        incomeCount += filterList[i].value;
      }
      setIncome(incomeCount);
      setExpense(expenseCount);
    }
  }, [filterList]);

  const handleAddItem = (item: Item) => {
    let newlist = [...list]
    newlist.push(item);
    setList(newlist);
  }

  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>Sistema Financeiro</C.HeaderText>
      </C.Header>
      <C.Body>
        <InforArea
          currentMonth={currentMonth}
          onMonthChange={handleMonthChange}
          income={income}
          expense={expense}
        />
        
        <InputArea onAdd={handleAddItem}/>

        <TableArea list={filterList} />
      </C.Body>
    </C.Container>
  );
};
