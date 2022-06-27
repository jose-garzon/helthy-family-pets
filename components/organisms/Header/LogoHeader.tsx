import { Container, Row } from "@nextui-org/react";
import { BackButton } from "../../Atoms/Button";
import { Logo } from "../../Atoms/Logo";

const LogoHeader = () => {
  return (
    <Container as="header" css={{ py: "$6" }}>
      <Row justify="space-between" align="center">
        <BackButton />
        <Logo />
      </Row>
    </Container>
  );
};

export { LogoHeader };
