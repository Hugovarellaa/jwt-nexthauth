import * as C from "./styles";

interface ResumeItemProps {
  title: string;
  value: number;
  colors?: string;
}

export const ResumeItem = ({ title, value, colors }: ResumeItemProps) => {
  return (
    <C.Container>
      <C.Title>{title}</C.Title>
      <C.Infor colors={colors}>R$ {value.toFixed(2)}</C.Infor>
    </C.Container>
  );
};
