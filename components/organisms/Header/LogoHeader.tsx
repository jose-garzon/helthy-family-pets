import { Container, Row } from "@nextui-org/react";
import { Logo } from "../../Atoms/Logo";

const LogoHeader = () => {
  return (
    <Container as="header" css={{ py: "$6" }}>
      <Row justify="center">
        <Logo />
      </Row>
    </Container>
  );
};

export { LogoHeader };
