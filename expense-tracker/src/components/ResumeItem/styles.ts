import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
`;

export const Title = styled.div`
  text-align: center;
  font-weight: bold;
  color: #888;
  margin-bottom: 5px;
`;

interface InforProps {
  colors?: string;
}

export const Infor = styled.div<InforProps>`
  text-align: center;
  font-weight: bold;
  color: ${(props) => props.colors ?? "#000"};
`;
