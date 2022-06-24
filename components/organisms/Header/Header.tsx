import { Container, Row, Text } from "@nextui-org/react";
import { Logo } from "../../Atoms/Logo";
import { Toolbar } from "../../Atoms/Toolbar";

const Header = () => {
  return (
    <Toolbar>
      <Row justify="space-between">
        <Logo />
        <Text>Iniciar Sesión</Text>
      </Row>
    </Toolbar>
  );
};
export { Header };
