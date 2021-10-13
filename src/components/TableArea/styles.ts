import styled from "styled-components";

export const Container = styled.table`
  width: 100%;
  background-color: #fff;
  padding: 1.25rem;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 0.8rem;
  margin-top: 1rem;
`;

export const TableHeadColumn = styled.th<{ width?: number }>`
  width: ${(props) => (props.width ? `${props.width}px` : "auto")};
  padding: 0.75rem 0;
  text-align: left;
`;
