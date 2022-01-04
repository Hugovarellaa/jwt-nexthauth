import * as C from "./styles";
import { Item } from "../../types/item";
import { formatDate } from "../../helpers/dateFilter";
import { categories } from "../../data/categories";

interface TableItemProps {
  item: Item;
}

export const TableItem = ({ item }: TableItemProps) => {
  return (
    <C.TableLine>
      <C.TableColumn>{formatDate(item.date)}</C.TableColumn>
      <C.TableColumn>
        <C.category color={categories[item.category].color}>
          {categories[item.category].title}
        </C.category>
      </C.TableColumn>
      <C.TableColumn>{item.title}</C.TableColumn>
      <C.TableColumn>
        <C.Value color={categories[item.category].expense ? "red" : "green"}>
          R$ {item.value}
        </C.Value>
      </C.TableColumn>
    </C.TableLine>
  );
};
