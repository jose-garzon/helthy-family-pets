import { Container, Row, Text } from "@nextui-org/react";
import Link from "next/link";
import { Logo } from "../../Atoms/Logo";

const Header = () => {
  return (
    <Container as="header" css={{ py: "$6" }}>
      <Row justify="space-between" align="center">
        <Logo />
        <Link href="/login">
          <Text weight="bold" color="primary">
            Iniciar Sesión
          </Text>
        </Link>
      </Row>
    </Container>
  );
};
export { Header };
