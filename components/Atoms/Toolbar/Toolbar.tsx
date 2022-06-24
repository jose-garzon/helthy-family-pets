import { Container } from "@nextui-org/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Toolbar = ({ children }: Props) => {
  return (
    <Container as="header" css={{ py: "$6" }}>
      {children}
    </Container>
  );
};
export { Toolbar };
