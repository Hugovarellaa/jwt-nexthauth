import styled from "styled-components";

export const Table = styled.table`
  width: 100%;
  background: #ffffff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 10px;
  margin-top: 20px;
`;

interface TableHeadColumnProps {
  width?: number;
}

export const TableHeadColumn = styled.th<TableHeadColumnProps>`
  width: ${(props) => (props.width ? `${props.width}px` : "auto")};
  padding: 10px 0;
  text-align: left;
`;
