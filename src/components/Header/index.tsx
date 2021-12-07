import { Container, Content } from "./styles";
import logoImg from "../../assets/logo.svg";

interface HeaderProps {
  isOpen: () => void;
}

export function Header({ isOpen }: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="logo" />
        <button type="button" onClick={isOpen}>
          Nova transação
        </button>
      </Content>
    </Container>
  );
}
