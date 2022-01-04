import { Item } from "../../types/item";
import { TableItem } from "../TableItem";
import * as C from "./styles";

interface TableAreaProps {
  list: Item[];
}

export const TableArea = ({ list }: TableAreaProps) => {
  return (
    <C.Table>
      <thead>
        <tr>
          <C.TableHeadColumn width={150}>Date</C.TableHeadColumn>
          <C.TableHeadColumn width={200}>Categoria</C.TableHeadColumn>
          <C.TableHeadColumn>Título</C.TableHeadColumn>
          <C.TableHeadColumn width={200}>Valor</C.TableHeadColumn>
        </tr>
      </thead>
      <tbody>
        {list.map((item, index) => (
          <TableItem key={index} item={item} />
        ))}
      </tbody>
    </C.Table>
  );
};
