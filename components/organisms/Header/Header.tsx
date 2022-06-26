import { Container, Row, Text } from "@nextui-org/react";
import Link from "next/link";
import { Logo } from "../../Atoms/Logo";

const Header = () => {
  return (
    <Container as="header" css={{ py: "$6" }}>
      <Row justify="space-between">
        <Logo />
        <Link href="/login">
          <Text>Iniciar Sesión</Text>
        </Link>
      </Row>
    </Container>
  );
};
export { Header };
