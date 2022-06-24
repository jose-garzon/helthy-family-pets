import { Container, Row, Text } from "@nextui-org/react";
import { Logo } from "../../Atoms/Logo";

const Header = () => {
  return (
    <Container as="header" css={{ py: "$6" }}>
      <Row justify="space-between">
        <Logo />
        <Text>Iniciar Sesión</Text>
      </Row>
    </Container>
  );
};
export { Header };
